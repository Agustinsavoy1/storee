import { Button, Flex, Text, Image } from '@chakra-ui/react';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { ApiResponseData } from './ShoppingCart'; // Import the ApiResponseData type

type CartItemProps = {
    id: number;
    quantity: number;
    item: ApiResponseData | undefined;
};

export function CartItem({ id, quantity, item }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();


    if (!item) return null;

    return (
        <Flex alignItems='center' justify='space-between' p='2' borderBottom='1px solid #e2e8f0'>
            <Image src={item.url_foto} alt={item.nombre} width='75px' height='75px' objectFit='cover' />

            <Flex flex='1' ml='4' flexDirection='column'>
                <Text fontSize='lg' fontWeight='semibold'>
                    {item.nombre}
                </Text>
                <Text fontSize='md' color='gray.500'>
                    {formatCurrency(item.precio)}
                </Text>
            </Flex>

            <Flex alignItems='center'>
                <Text mx='2' fontSize='xl'>
                    {quantity}
                </Text>
            </Flex>

            <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>
                x
            </Button>
        </Flex>
    );
}
