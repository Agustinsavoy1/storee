import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Papa from "papaparse";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { Form } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

type ApiResponseData = {
  id: number | string;
  nombre: string;
  precio: number;
  url_foto: string;
  type: string;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const [step, setStep] = useState(1);
  const { closeCart, cartItems } = useShoppingCart();
  const [parsedData, setParsedData] = useState<ApiResponseData[]>([]);


  const [formData, setFormData] = useState({
    name: "",
    address: "",
    checkboxValue: false,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Check if the input is a checkbox and update the value accordingly
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the API
      const response: AxiosResponse = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWfThl1orWa1Uxn6Mzr_qn2ezQSosCGLIRA84JkTrczj_zHkYExNITCDo9x8s9GXc942WM--JPh67A/pub?output=csv",
        {
          responseType: "blob",
        }
      );

      // Parse the data using PapaParse
      const results = await parseData(response.data);
      setParsedData(results);
    } catch (error) {
      console.error("Error fetching data:");
    }
  };

  const parseData = (data) => {
    return new Promise<ApiResponseData[]>((resolve, reject) => {
      Papa.parse(data, {
        header: true,
        complete: (results) => {
          const parsedData = results.data;
          resolve(parsedData);
        },
        error: (error) => {
          reject(error.message);
        },
      });
    });
  };

  // Create a variable to store the cart items that match the ids in parsedData
  const matchedCartItems = cartItems.map((cartItem) => {
    const item = parsedData.find((i) => i.id === cartItem.id);
    return { ...cartItem, item };
  });

  // Calculate the total price based on matched cart items
  const totalPrice = matchedCartItems.reduce((total, cartItem) => {
    const item = cartItem.item;
    return total + (item?.precio || 0) * cartItem.quantity;
  }, 0);

  const productList = matchedCartItems.reduce((result, cartItem) => {
    const itemText = `* ${cartItem.quantity} x ${cartItem.item?.nombre}`;
    return result + itemText + "\n";
  }, "");

  const clientData = `* ${formData.name} x ${formData.address}\n* Checkbox Value: ${formData.checkboxValue ? "Yes" : "No"
    }\n* Comments: ${formData.comments}\n`;

  console.log(formData)

  return (
    <Drawer isOpen={isOpen} onClose={closeCart} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Completa tu pedido</DrawerHeader>

        <DrawerBody>
          {step === 1 && (
            <Stack spacing={3} height={"100vh"}>
              {matchedCartItems.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}

              <Flex>
                {" "}
                <Text>Total {formatCurrency(totalPrice)}</Text>{" "}
              </Flex>
            </Stack>
          )}

          {step === 2 && (
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>Nombre completo</FormLabel>
                <Input
                  placeholder="Nombre"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormControl>
                  <Checkbox
                    name="checkboxValue"
                    checked={formData.checkboxValue}
                    onChange={handleChange}
                  >
                    Retiro en sucursal
                  </Checkbox>
                </FormControl>
                <FormControl>
                  <Checkbox
                    name="checkboxValue"
                    checked={formData.checkboxValue}
                    onChange={handleChange}
                  >
                    Envio a domicilio
                  </Checkbox>
                </FormControl>
                <FormLabel>Direccion de envio</FormLabel>
                <Input
                  placeholder="Direccion"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>



              <FormControl>
                <FormLabel>Comentarios del pedido</FormLabel>
                <Input
                  placeholder="Comentarios"
                  type="text"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </FormControl>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5491136307931?text=${encodeURIComponent("Lista: \n" + productList + "\n" + clientData + "\n" + "\n" + "Total: " + formatCurrency(totalPrice))}`}
              >
                <Button onClick={closeCart}  >Enviar pedido</Button>
              </a>

            </Stack>
          )}

          {step === 3 && (
            <Stack>
              <Form>
                <h1>step3</h1>
              </Form>
            </Stack>
          )}
        </DrawerBody>

        <DrawerFooter>
          {step === 1 ? (
            <Button onClick={() => setStep(2)}>Siguiente</Button>
          ) : (
            <Button onClick={() => setStep(1)}>Atras</Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
