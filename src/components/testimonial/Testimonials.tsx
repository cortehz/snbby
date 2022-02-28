import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { ArrowBackwardIcon, ArrowForwardIcon } from "../../icons";
import Wrapper from "../layout/Wrapper";

import { testimonials } from "./testimonialList";
import { companyNames } from "./companyList";

interface TestimonialsProps {}

const Testimonials: React.FunctionComponent<TestimonialsProps> = () => {
  const [current, setCurrent] = useState(testimonials[0]);
  const [active, setActive] = useState(0);

  const handleSetClick = (index: number) => {
    setCurrent(testimonials[index]);
    setActive(index);
  };

  const handleNext = () => {
    if (active === testimonials.length - 1) {
      setActive(0);
      setCurrent(testimonials[0]);
    } else {
      setActive(active + 1);
      setCurrent(testimonials[active + 1]);
    }
  };

  const handlePrev = () => {
    if (active === 0) {
      setActive(testimonials.length - 1);
      setCurrent(testimonials[testimonials.length - 1]);
    } else {
      setActive(active - 1);
      setCurrent(testimonials[active - 1]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timer);
  });

  return (
    <Flex bg={"white"} my={2}>
      <Wrapper>
        <>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            position={"relative"}
          >
            <Button
              onClick={handlePrev}
              borderRadius={"50%"}
              width={"40px"}
              height={"40px"}
              position={["absolute", "relative"]}
              alignSelf={["flex-end", "flex-end", "center"]}
            >
              <ArrowBackwardIcon width={"24px"} height={"24px"} />
            </Button>
            <Flex flexDir={"column"} maxW={"650px"}>
              <Image
                src={current.companyname}
                width={"8rem"}
                height={"2rem"}
                alignSelf={"center"}
                my={8}
              />
              <Text as={"q"} fontStyle={"italic"} textAlign={"start"} px={4}>
                {current.quote}
              </Text>
              <Text my={6} textAlign={"center"}>
                <strong>{current.name},</strong> {current.role}
              </Text>
              <Flex alignSelf={"center"}>
                {Object.keys(testimonials).map((key, index) => (
                  <Box
                    as={"span"}
                    key={index}
                    data-testimonial={index}
                    onClick={() => handleSetClick(index)}
                    height={"20px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    cursor={"pointer"}
                    margin={"0 3px"}
                    width={"20px"}
                    _before={{
                      content: '""',
                      height: "8px",
                      width: "8px",
                      backgroundColor: `${
                        active === index ? "#45454d" : "#d4d4d4"
                      }`,
                      borderRadius: "50%",
                    }}
                    _hover={{ _before: { backgroundColor: "#45454d" } }}
                  />
                ))}
              </Flex>
            </Flex>
            <Button
              onClick={handleNext}
              borderRadius={"50%"}
              width={"40px"}
              height={"40px"}
              position={["absolute", "relative"]}
              right={"0"}
              alignSelf={["flex-end", "flex-end", "center"]}
            >
              <ArrowForwardIcon width={"24px"} height={"24px"} />
            </Button>
          </Flex>

          <SimpleGrid minChildWidth={["80px", "150"]} spacing="60px" my={12}>
            {companyNames.map((company, i) => (
              <Box display={"flex"} key={i}>
                <Image
                  src={company.logo}
                  alt={`Logo of ${company.name} showing testimonial.`}
                  maxWidth="100%"
                  height={"35px"}
                  margin="auto"
                  alignSelf="center"
                />
              </Box>
            ))}
          </SimpleGrid>
        </>
      </Wrapper>
    </Flex>
  );
};

export default Testimonials;
