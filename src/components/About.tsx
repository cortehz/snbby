import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { OffersIcon, SignUpIcon, SourceIcon } from "../icons";
import Wrapper from "./layout/Wrapper";

interface DesktopNavProps {}

const aboutItems: Array<{ title: string; description: string; icon: any }> = [
  {
    title: "Sign up for free",
    description:
      "Signing up and setting up your project takes less than 5 minutes",
    icon: <SignUpIcon width={82} height={82} />,
  },
  {
    title: "Source smarter",
    description:
      "Our data-based AI and our experts will help you find exactly what you are looking for",
    icon: <SourceIcon width={82} height={82} />,
  },
  {
    title: "Receive offers",
    description:
      "With our insights you always receive high-quality proposals at the best price",
    icon: <OffersIcon width={62} height={82} />,
  },
];
const About: React.FunctionComponent<DesktopNavProps> = () => {
  return (
    <Flex bg={"white"} my={2}>
      <Wrapper>
        <Flex
          flexDir={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          px={4}
          py={8}
          gap={8}
        >
          {aboutItems.map((item, id) => (
            <Flex
              key={`${item.title}.${id}`}
              flex={1}
              gap={4}
              flexDir={["row", "row", "column"]}
              justifyContent={"center"}
              alignItems={"center"}
              py={4}
            >
              {item.icon}
              <Box maxW={"320px"}>
                <Text
                  as={"h3"}
                  fontWeight={"bold"}
                  textAlign={["start", "start", "center"]}
                >
                  {item.title}
                </Text>
                <Text as={"p"} textAlign={["start", "start", "center"]}>
                  {item.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default About;
