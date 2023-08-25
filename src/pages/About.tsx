import { Box, Container, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import aboutImage from '../assets/about/about.jpg';

function AboutSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Flex height='76.5vh' minWidth='full' background='red' align='center' justify='center'>
      <Container maxW='container.lg'>
        <Flex direction={{ base: 'column', lg: 'row' }} alignItems={{ lg: 'center' }}>
          <Box flex={{ base: '1', lg: '0.5' }} data-aos='fade-up' data-aos-delay='200'>
            <Box>
              <Heading size='md' mb={2}>
                Quienes somos
              </Heading>
              <Heading size='lg' mb={4}>
                Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti
                reprehenderit.
              </Heading>
              <Text mb={4}>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur
                itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
              </Text>
              <Flex justify={{ base: 'center', lg: 'flex-start' }}>
                <Button variant='link' color='cyan.600'>
                  <span>Read More</span>
                  <i className='bi bi-arrow-right' />
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box
            flex={{ base: '1', lg: '0.5' }}
            data-aos='zoom-out'
            data-aos-delay='200'
            ml={{ lg: '4' }}
            mt={{ base: '4', lg: '0' }}>
            <Image src={aboutImage} alt='About' maxW='full' />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AboutSection;
