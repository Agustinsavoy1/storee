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
  Icon,
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
    <Box boxShadow='lg' bg={useColorModeValue('#803643', 'red')} px={4}>
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
              <Button bg={"transparent"} color={"white"} >Home</Button>
            </NavLink>
            <NavLink to='/store'>
              <Button bg={"transparent"} color={"white"} >Store</Button>
            </NavLink>
            <NavLink to='/about'>
              <Button bg={"transparent"} color={"white"} >Sobre nosotros</Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button bg={"transparent"} color={"white"} >Contacto</Button>
            </NavLink>
          </HStack>
        </HStack>
        {cartQuantity > 0 && (
          <Box position='relative'>
            <Button onClick={openCart} w='3rem' h='3rem' variant='outline' rounded='full'>
              <Icon boxSize={"2rem"}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Shopping_Cart_02"> <path id="Vector" d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </Icon>
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
