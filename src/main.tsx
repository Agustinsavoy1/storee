import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import theme from "./theme/theme"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <BrowserRouter>
        <Box bg="white" minHeight="100vh">
          <App />
        </Box>

      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
