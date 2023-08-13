
import { Grid, GridItem, Text, Image, Box, Flex } from "@chakra-ui/react";

function Divider() {
    return (
        <Flex>
            <Flex>
                <Text>
                    Divider
                </Text>
            </Flex>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                gap={4}
                width="80%"
                margin="auto"
                mt={8}
                mb={8}
            >

                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Tarjeta de Credito
                        </Text>
                        <Text mb={2}>Description for Grid Item 1</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Tarjeta de debito
                        </Text>
                        <Text mb={2}>Description for Grid Item 2</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Mercado pago
                        </Text>
                        <Text mb={2}>Description for Grid Item 3</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Whats app check out
                        </Text>
                        <Text mb={2}>Description for Grid Item 4</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default Divider;
