
import { Grid, GridItem, Text, Image, Flex } from "@chakra-ui/react";

function Divider() {
    return (
        <Flex direction="column" alignItems="center">
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                gap={4}
                width="80%"
                margin="auto"
                mt={{ base: 4, md: 8 }}
                mb={{ base: 4, md: 8 }}
            >

                <GridItem>
                    <Flex justify={"space-around"} align={"center"} p={4} border="1px solid #ccc">
                        <Flex direction={"column"}>
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                Tarjeta de Credito
                            </Text>
                            <Text mb={2}>Ver mas...</Text>
                        </Flex>

                        <Image src="https://via.placeholder.com/90" alt="Icon" />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex justify={"space-around"} align={"center"} p={4} border="1px solid #ccc">
                        <Flex direction={"column"}>
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                Tarjeta de Debito
                            </Text>
                            <Text mb={2}>Ver mas...</Text>
                        </Flex>

                        <Image src="https://via.placeholder.com/90" alt="Icon" />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex justify={"space-around"} align={"center"} p={4} border="1px solid #ccc">
                        <Flex direction={"column"}>
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                Envios a domicilio
                            </Text>
                            <Text mb={2}>Ver mas...</Text>
                        </Flex>

                        <Image src="https://via.placeholder.com/90" alt="Icon" />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex justify={"space-around"} align={"center"} p={4} border="1px solid #ccc">
                        <Flex direction={"column"}>
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                Efectivo
                            </Text>
                            <Text mb={2}>Ver mas...</Text>
                        </Flex>

                        <Image src="https://via.placeholder.com/90" alt="Icon" />
                    </Flex>
                </GridItem>

            </Grid>
        </Flex>
    );
}

export default Divider;
