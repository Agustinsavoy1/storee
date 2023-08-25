import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useShoppingCart } from '../context/ShoppingCartContext';
import navlogo from '../assets/navlogo.jpg';

// interface Props {
//     children: React.ReactNode
// }

// const Links = ['Dashboard', 'Projects', 'Team']

// const NavLink = (props: Props) => {
//     const { children } = props

//     return (
//         <Box
//             as="a"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{
//                 textDecoration: 'none',
//                 bg: useColorModeValue('gray.200', 'gray.700'),
//             }}
//             href={'#'}>
//             {children}
//         </Box>
//     )
// }

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label='Open Menu'
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems='center'>
          <Box boxSize='3rem'>
            <Image src={navlogo} alt='logo' />
          </Box>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}
            <NavLink to='/'>
              <Button>Home</Button>
            </NavLink>
            <NavLink to='/store'>
              <Button>Store</Button>
            </NavLink>
            <NavLink to='/about'>
              <Button>Sobre nosotros</Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button>Contacto</Button>
            </NavLink>
          </HStack>
        </HStack>
        {cartQuantity > 0 && (
          <Box position='relative'>
            <Button onClick={openCart} w='3rem' h='3rem' variant='outline' rounded='full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
                fill='currentColor'
                height='1.5rem'
                width='1.5rem'>
                {/* SVG path goes here */}
              </svg>
              <Box
                position='absolute'
                bottom='0'
                right='0'
                transform='translate(25%, 25%)'
                bg='red.500'
                rounded='full'
                color='white'
                w='1.5rem'
                h='1.5rem'
                display='flex'
                justifyContent='center'
                alignItems='center'>
                {cartQuantity}
              </Box>
            </Button>
          </Box>
        )}
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4}>
            <NavLink to='/'>
              <Button>Home</Button>
            </NavLink>
            <NavLink to='/store'>
              <Button>Store</Button>
            </NavLink>
            <NavLink to='/about'>
              <Button>Sobre nosotros</Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button>Contacto</Button>
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
