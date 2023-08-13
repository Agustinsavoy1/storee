import { useState, useEffect } from "react";
import { Button, Box, Input, Grid, Flex, Wrap, WrapItem, Img } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import Papa from "papaparse";
import { StoreItem } from "../components/StoreItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import loader from "../assets/pikachu.gif"

// Define the type for the data received from the API
type ApiResponseData = {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
};

export default function Store() {
  const [parsedData, setParsedData] = useState<ApiResponseData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    AOS.init()
    get();
  }, []);

  const get = async () => {
    try {
      // Fetch data from the API
      const response: AxiosResponse = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWfThl1orWa1Uxn6Mzr_qn2ezQSosCGLIRA84JkTrczj_zHkYExNITCDo9x8s9GXc942WM--JPh67A/pub?output=csv",
        {
          responseType: "blob",
        }
      );

      // Parse the data using PapaParse
      const results = await parseData(response.data);
      setParsedData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const parseData = (data: any) => {
    return new Promise<ApiResponseData[]>((resolve, reject) => {
      Papa.parse(data, {
        header: true,
        complete: (results) => {
          const parsedData: ApiResponseData[] = results.data;
          resolve(parsedData);
        },
        error: (error) => {
          reject(error.message);
        },
      });
    });
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const filteredData = parsedData.filter((item) => {
    if (selectedCategory === "todos" || item.type === selectedCategory) {
      if (searchQuery.trim() === "") return true;
      return item.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  return (
    <>
      <Flex marginTop={"2.5rem"} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"1rem"}>

        <Wrap spacing={2} mb={2}>
          <WrapItem>
            <Button onClick={() => handleCategoryFilter("todos")}>Todos</Button>
          </WrapItem>
          <WrapItem>
            <Button onClick={() => handleCategoryFilter("lacteos")}>Lacteos</Button>
          </WrapItem>
          <WrapItem>
            <Button onClick={() => handleCategoryFilter("fiambres")}>Fiambres</Button>
          </WrapItem>
          <WrapItem >
            <Button onClick={() => handleCategoryFilter("np")}>NP</Button>
          </WrapItem>
        </Wrap>
        <Input

          type="text"
          placeholder="Search by query..."
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
        />

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          borderBottom={"1px"}
          borderBottomColor={"white"}>
          {!filteredData ? (filteredData.map((item) => (
            <Box data-aos="fade-up" key={item.id}>
              <StoreItem {...item} />
            </Box>
          ))) : <Flex><img
            src={loader}
            alt="loader"
            style={{ maxWidth: "100%" }}
          /></Flex>}
        </Grid>
      </Flex>
    </>
  );
}
