import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import BgWrapper from "./BgWrapper";
import { customerData } from "./DesktopHero";
import RequestForm from "./RequestForm";

interface HeroNavProps {}

const MobileHero: React.FunctionComponent<HeroNavProps> = () => {
  return (
    <Flex flexDir={"column"} width={"full"} alignItems={"center"} bg={"white"}>
      <RequestForm />
      <BgWrapper>
        <List
          display={"flex"}
          gap={4}
          color={"white"}
          margin={"auto"}
          my={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {customerData.map((item, id) => (
            <ListItem key={`${item.name}.${id}`}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {item.value}
              </Text>
              <Text fontSize={"sm"}>{item.name}</Text>
            </ListItem>
          ))}
        </List>
      </BgWrapper>
    </Flex>
  );
};

export default MobileHero;
