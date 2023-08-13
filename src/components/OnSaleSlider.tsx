
import { useState, useEffect } from "react";

import image1 from "../assets/banner.webp"
import image2 from "../assets/banner2.webp"
import image3 from "../assets/banner3.webp"
import { Grid, GridItem, Text, Image, Box, Flex } from "@chakra-ui/react";

const OnSaleSlider = () => {

    const images = [
        image1,
        image2,
        image3,
        // Add more image URLs here
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(goToNext, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Flex direction={"column"}>
            <Text>
                Ofertas
            </Text>
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
                            Grid Item 1
                        </Text>
                        <Text mb={2}>Description for Grid Item 1</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Grid Item 2
                        </Text>
                        <Text mb={2}>Description for Grid Item 2</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Grid Item 3
                        </Text>
                        <Text mb={2}>Description for Grid Item 3</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box p={4} border="1px solid #ccc" borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Grid Item 4
                        </Text>
                        <Text mb={2}>Description for Grid Item 4</Text>
                        <Image src="https://via.placeholder.com/100" alt="Icon" />
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default OnSaleSlider