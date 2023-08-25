import { Flex } from '@chakra-ui/react';

import Divider from '../components/Divider';
import Slider from '../components/Slider';
import OnSaleSlider from '../components/OnSaleSlider';
import BestSellers from '../components/BestSellers';
import BestSellersProducts from '../components/BestSellersProducts';

function ImageSlider() {
  return (
    <Flex direction='column'>
      <Slider />
      <Divider />
      <OnSaleSlider />
      <BestSellersProducts />
      <BestSellers />
    </Flex>
  );
}

export default ImageSlider;
