import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Input,
  Grid,
  Flex,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon, DragHandleIcon } from "@chakra-ui/icons"
import axios, { AxiosResponse } from "axios";
import Papa from "papaparse";
import { StoreItem } from "../components/StoreItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import loader from "../assets/pikachu.gif"

interface ParsedData {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
}

// Define the type for the data received from the API
type ApiResponseData = {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
};

export default function Store() {
  const [parsedData, setParsedData] = useState<ParsedData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const [view, setView] = useState<boolean>(true)
  //const [close, setClose] = useState<boolean>(false)

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


  const parseData = (data: string) => {
    return new Promise<ApiResponseData[]>((resolve, reject) => {
      Papa.parse(data, {
        header: true,
        complete: (results) => {
          const parsedData = results.data as ApiResponseData[];
          resolve(parsedData);
        },
        error: (error: Error) => {
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
      <Box width={"100%"}>



        {view === true ?
          <Flex
            direction={{ base: "column", md: "column" }}
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems={{ base: "center", md: "flex-start" }}
            gap={{ base: "1rem", md: "2rem" }}
            minW={"full"}

          >
            <Flex justify={"center"} align={"center"} direction={"column"} width={"full"}>
              <Flex direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }} width={"full"}>
                <Flex w={"full"} justify={"flex-end"} flexDirection={{ base: "row-reverse", md: "row" }} gap={"0.5rem"}>
                  <Flex >
                    <HamburgerIcon margin={1} bg={"yellow"} fontSize={"2rem"} cursor={"pointer"} onClick={() => setView(false)} />
                  </Flex>

                  <Flex >
                    <DragHandleIcon margin={1} bg={"yellow"} fontSize={"2rem"} cursor={"pointer"} onClick={() => setView(true)} />
                  </Flex>
                </Flex>
              </Flex>
              <Input
                marginBottom={"1rem"}
                width={{ base: "100%", md: "20%" }}
                type="text"
                placeholder="Search by query..."
                value={searchQuery}
                onChange={(e) => handleSearchQuery(e.target.value)}
              />
              <Wrap spacing={2} >
                <WrapItem >
                  <Button m={1} onClick={() => handleCategoryFilter("todos")}>Todos</Button>
                </WrapItem>
                <WrapItem>
                  <Button m={1} onClick={() => handleCategoryFilter("lacteos")}>Lacteos</Button>
                </WrapItem>
                <WrapItem>
                  <Button m={1} onClick={() => handleCategoryFilter("fiambres")}>Fiambres</Button>
                </WrapItem>
                <WrapItem >
                  <Button m={1} onClick={() => handleCategoryFilter("np")}>NP</Button>
                </WrapItem>
              </Wrap>
            </Flex>

            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
              gap={5}
              mt={{ base: "1rem", md: 0 }}
              width={"full"}
            >
              {filteredData ? (filteredData.map((item) => (
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
          :
          <Flex minH={"100vh"} background={"red"} width={"100%"} direction={"column"} justifyContent={"flex-start"} alignItems={"center"} gap={"1rem"}>
            <Flex background={"blue"} minW={"full"} justify={"flex-end"}>
              <Flex
                flexDirection={"row-reverse"}
              >
                <Flex  >
                  <HamburgerIcon margin={1} bg={"yellow"} fontSize={"2rem"} cursor={"pointer"} onClick={() => setView(false)} />
                </Flex>

                <Flex >
                  <DragHandleIcon margin={1} bg={"yellow"} fontSize={"2rem"} cursor={"pointer"} onClick={() => setView(true)} />
                </Flex>
              </Flex>
            </Flex>

            <Accordion defaultIndex={[0]} allowMultiple bg={"white"} w={"80vw"}>
              <AccordionItem>
                <h2>
                  <AccordionButton onClick={() => handleCategoryFilter("lacteos")}>
                    <Box as="span" flex='1' textAlign='left'>
                      Lacteos
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
                  <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {filteredData.map((item) => (
                      <GridItem key={item.id} data-aos="fade-up">
                        <StoreItem {...item} />
                      </GridItem>
                    ))}
                  </Grid>
                </AccordionPanel>

              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton onClick={() => handleCategoryFilter("fiambres")}>
                    <Box as="span" flex='1' textAlign='left'>
                      Fiambres
                    </Box>
                    <AccordionIcon />
                  </AccordionButton >
                </h2>
                <AccordionPanel pb={4}>
                  {
                    filteredData.map((item => {
                      return (
                        <Box data-aos="fade-up" key={item.id}>
                          <StoreItem {...item} />
                        </Box>
                      )
                    }))
                  }
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton onClick={() => handleCategoryFilter("np")}>
                    <Box as="span" flex='1' textAlign='left'>
                      No perecederos
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {
                    filteredData.map((item => {
                      return (
                        <Box data-aos="fade-up" key={item.id}>
                          <StoreItem {...item} />
                        </Box>
                      )
                    }))
                  }
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton onClick={() => handleCategoryFilter("todos")}>
                    <Box as="span" flex='1' textAlign='left'>
                      Todos
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {
                    filteredData.map((item => {
                      return (
                        <Box data-aos="fade-up" key={item.id}>
                          <StoreItem {...item} />
                        </Box>
                      )
                    }))
                  }
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton disabled onClick={() => handleCategoryFilter("promociones")}>
                    <Box as="span" flex='1' textAlign='left'>
                      Promociones
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>





          </Flex>
        }
      </Box >
    </>

  );
}
