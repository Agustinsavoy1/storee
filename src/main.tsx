import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='light' />
      <BrowserRouter>
        <Box minHeight='100vh'>
          <App />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
