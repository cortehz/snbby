import React from "react";
import { Image, Flex, Box, Text } from "@chakra-ui/react";

import pencilImage from "../assets/img/pencil-image.jpeg";
import coffeeImage from "../assets/img/coffee-image.jpeg";
interface DesktopNavProps {}

const aboutSnubes: Array<{ title: string; description: string }> = [
  {
    title: "Trusted Know-How",
    description:
      "We have more than 20 years of experience and continuously check call centers for their quality and capabilities. Customers like Allianz trust Snubes industry knowledge.",
  },
  {
    title: "Time and cost savings",
    description:
      "With Snubes you can easily compare prices, quality and availability, and find more potential suppliers. Reach your goal faster and save resources.",
  },
  {
    title: "Satisfaction guaranteed",
    description:
      "We offer a validated data-based approach to procurement, rather than awarding contracts only based on the lowest price, an existing relationship or 'gut feeling'.",
  },
];
const AboutUs: React.FunctionComponent<DesktopNavProps> = () => {
  return (
    <Flex alignItems={"space-between"} gap={4} bg={"white"}>
      <Box flex={1} display={["none", "none", "block"]}>
        <Image src={pencilImage} alt="snubes logo" maxW={"100%"} />
      </Box>

      <Flex
        flex={1}
        gap={4}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        py={4}
        px={8}
        textAlign={"start"}
      >
        <Text as={"h2"} fontSize={"2xl"} fontWeight={"bold"}>
          Why Snubes?
        </Text>
        {aboutSnubes.map((item, id) => (
          <Box key={`${item.title}.${id}`}>
            <Text
              as={"h3"}
              fontWeight={"bold"}
              textAlign={["start", "start", "center"]}
            >
              {item.title}
            </Text>
            <Text as={"p"} textAlign={"start"}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Flex>
      <Box flex={1} display={["none", "block", "block"]} h={"100%"}>
        <Image
          src={coffeeImage}
          alt="snubes logo"
          maxW={"100%"}
          height={"100%"}
        />
      </Box>
    </Flex>
  );
};

export default AboutUs;
