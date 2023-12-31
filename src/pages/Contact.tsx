import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container minH='full' maxW='full' minW='full' centerContent overflow='hidden'>
      <Flex>
        <Box
          bg='#803643'
          color='white'
          borderRadius='lg'
          m={{ base: 4, sm: 4, md: 16, lg: 10 }}
          p={{ base: 5, sm: 5, md: 5, lg: 10 }}>
          <Box p={2} display='flex' flexDirection='row-reverse'>
            <Wrap
              direction={{ base: 'column', sm: 'column', md: 'row' }}
              justify={{ base: 'center' }}
              spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box
                >
                  <Heading>Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                    Envianos tu consulta
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color='#bb9d54' size='20px' />}>
                        +54 9 11 3333 3333
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='#bb9d54' size='20px' />}>
                        losincas@losincas.com
                      </Button>
                      <Button

                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='#bb9d54' size='20px' />}>
                        Buenos Aires, Argentina.
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems='flex-start'>
                    <IconButton color='#bb9d54'
                      aria-label='facebook'
                      variant='ghost'
                      size='lg'
                      isRound
                      _hover={{ bg: 'white' }}
                      icon={<MdFacebook size='28px' />}
                    />
                    <IconButton color='#bb9d54'
                      aria-label='github'
                      variant='ghost'
                      size='lg'
                      isRound
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size='28px' />}
                    />
                    <IconButton color='#bb9d54'
                      aria-label='discord'
                      variant='ghost'
                      size='lg'
                      isRound
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size='28px' />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement pointerEvents='none'>
                            <BsPerson color='gray.800' />
                          </InputLeftElement>
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement pointerEvents='none'>
                            <MdOutlineEmail color='gray.800' />
                          </InputLeftElement>
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder='message'
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button variant='solid' bg='#bb9d54' color='white' _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
