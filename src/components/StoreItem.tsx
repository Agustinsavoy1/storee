import { Button, Box, Image, Flex, Text } from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  nombre: string;
  precio: number;
  url_foto: string;
};

export function StoreItem({ id, nombre, precio, url_foto }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Flex
      direction='row-reverse'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      justify='center'
      w='20rem'
      alignItems='center'>
      <Image src={url_foto} alt={nombre} maxW='50%' borderRadius='20px' objectFit='cover' />

      <Box p='4'>
        <Flex direction='column' justifyContent='center' alignItems='baseline' mb='2'>
          <Text fontSize='lg' fontWeight='semibold'>
            {nombre}
          </Text>
          <Text fontSize='md' color='gray.500'>
            {formatCurrency(precio)}
          </Text>
        </Flex>

        <Box mt='auto'>
          {quantity === 0 ? (
            <Button w='100%' onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <Flex flexDirection='column' alignItems='center' gap='.5rem'>
              <Flex alignItems='center' justifyContent='center' gap='.5rem'>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <Text fontSize='3xl'>{quantity}</Text>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </Flex>
              <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>
                Remove
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    </Flex>
  );
}
