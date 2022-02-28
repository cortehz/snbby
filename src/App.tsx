import React, { useState, useMemo } from "react";

import { Navigation } from "./components/navigation";
import { Flex, Box } from "@chakra-ui/react";
import { Hero } from "./components/hero";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/testimonial/Testimonials";
import Footer from "./components/Footer";
import { FormContext } from "./store/FormContext";

function App() {
  const [form, setForm] = useState(null);

  const value = useMemo(() => ({ form, setForm }), [form, setForm]);

  return (
    <Box bg={"grayBg"}>
      <Flex as={"header"} flexDir={"column"}>
        <Navigation />
        <FormContext.Provider value={value}>
          <Hero />
        </FormContext.Provider>
      </Flex>
      <Box as="main">
        <About />
        <AboutUs />
      </Box>

      <Box as="section">
        <Testimonials />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
