import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About"
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Contact from "./pages/Contact";


function App() {
  return (

    <ShoppingCartProvider>
      <Navbar />
      <Flex maxW="100%" justifyContent={"center"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Flex>
      <Footer />
    </ShoppingCartProvider>

  );
}

export default App;
