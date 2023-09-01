import { useEffect, useState } from 'react';
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios, { AxiosResponse } from 'axios';
import Papa from 'papaparse';

interface ParsedData {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
  descripcion: string;
}

// Define the type for the data received from the API
type ApiResponseData = {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
  descripcion: string;
};

const BestSellersProducts = () => {
  const [parsedData, setParsedData] = useState<ParsedData[]>([]);

  const bestSellers = parsedData.filter(item => {
    return item.type === 'masvendidos';
  });

  const parseData = (data: string): Promise<ApiResponseData[]> => {
    return new Promise<ApiResponseData[]>((resolve, reject) => {
      Papa.parse(data, {
        header: true,
        complete: results => {
          const parsedResultsData = results.data as ApiResponseData[];
          resolve(parsedResultsData);
        },
        error: (error: Error) => {
          reject(error.message);
        },
      });
    });
  };

  const get = async () => {
    try {
      // Fetch data from the API
      const response: AxiosResponse<string> = await axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTWfThl1orWa1Uxn6Mzr_qn2ezQSosCGLIRA84JkTrczj_zHkYExNITCDo9x8s9GXc942WM--JPh67A/pub?output=csv',
        {
          responseType: 'text',
        }
      );

      // Parse the data using PapaParse
      const results = await parseData(response.data);
      setParsedData(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    AOS.init();
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction='column'>
      <Heading marginLeft='6vw' as='h2'>
        Mas vendidos
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4} width='80%' margin='auto' mt={8} mb={8}>
        {bestSellers.map(item => {
          return (
            <GridItem key={item.id}>
              <Box display={"flex"} flexDirection={"column"} p={4} border='1px solid #ccc' borderRadius='md'>
                <Text fontSize='lg' fontWeight='bold' mb={2}>
                  {item.nombre}
                </Text>
                <Text mb={2}>{item.descripcion}</Text>
                <Image src={item.url_foto} alt={item.nombre} />
                <Button color={"white"} bg={"#803643"} variant='outline'>
                  Comprar
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default BestSellersProducts;
