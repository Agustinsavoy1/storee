


import Divider from "../components/Divider.tsx"
import Slider from "../components/Slider.tsx"
import OnSaleSlider from "../components/OnSaleSlider.tsx";
import BestSellers from "../components/BestSellers.tsx";

import { Flex } from "@chakra-ui/react"




function ImageSlider() {




  return (
    <Flex direction={"column"}>
      <Slider />
      <Divider />
      <OnSaleSlider />
      <BestSellers />

    </ Flex >
  );
}

export default ImageSlider;