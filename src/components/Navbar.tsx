import { Button, Flex, Box, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import navlogo from '../assets/navlogo.jpg';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Flex as='nav' boxShadow='sm' align='center' justify='center' top='0' height='15vh' backgroundColor='cyan.600'>
      <Flex maxW='container.lg' direction='row' gap='1rem'>
        <Flex boxSize='5.25rem'>
          <Image src={navlogo} alt='logo' />
        </Flex>

        <Flex direction='row' gap='1rem' align='center'>
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
        </Flex>
      </Flex>

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
  );
}
