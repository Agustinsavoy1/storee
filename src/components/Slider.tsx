
import { useState, useEffect } from "react";
import { Center, Button, Box, Flex } from '@chakra-ui/react'
import image1 from "../assets/banner.webp"
import image2 from "../assets/banner2.webp"
import image3 from "../assets/banner3.webp"
const Slider = () => {

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
        <Center h="full" bg="gray.100">
            <Box>
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    style={{ maxWidth: "100%" }}
                />
                <Box position={"absolute"} top={"30%"} mt={4}>
                    <Flex marginLeft={"5rem"} justify={"space-between"} align={"center"} width={"90vw"}>
                        <Button onClick={goToPrev} mr={2} variant="outline">
                            Previous
                        </Button>
                        <Button onClick={goToNext} variant="outline">
                            Next
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Center>
    )
}

export default Slider