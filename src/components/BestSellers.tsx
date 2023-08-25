import { useState, useEffect } from 'react';
import { Center, Box, Button, Flex } from '@chakra-ui/react';
import image1 from '../assets/banner.webp';
import image2 from '../assets/banner2.webp';
import image3 from '../assets/banner3.webp';

const BestSellers = () => {
  const images = [
    image1,
    image2,
    image3,
    // Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center h={{ base: '50vh', md: '70vh' }} bg='gray.100'>
      <Box w={{ base: '90%', md: '80%' }} position='relative'>
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{ maxWidth: '100%' }} />
        <Box position='absolute' top={{ base: '30%', md: 'auto' }} mt={{ base: 4, md: 0 }}>
          <Flex
            marginLeft={{ base: '1rem', md: '5rem' }}
            justify={{ base: 'space-between', md: 'flex-start' }}
            align='center'
            width='100%'>
            <Button onClick={goToPrev} mr={2} variant='outline'>
              Previous
            </Button>
            <Button onClick={goToNext} variant='outline'>
              Next
            </Button>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default BestSellers;
