import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import RequestForm from "./RequestForm";
import Wrapper from "../layout/Wrapper";
import BgWrapper from "./BgWrapper";
interface HeroNavProps {}

export const customerData: Array<{ name: string; value: string }> = [
  { name: "Tenders", value: "500+" },
  { name: "Callcenter", value: "200+" },
  { name: "Agents available", value: "375.000" },
  { name: "Faster sourcing", value: "85%" },
];

const DesktopHero: React.FunctionComponent<HeroNavProps> = () => {
  return (
    <BgWrapper>
      <Wrapper>
        <Flex gap={8} justifyContent={"space-between"} color={"white"}>
          <RequestForm />
          <Flex
            alignSelf={"flex-end"}
            flexDir={"column"}
            color={"white"}
            gap={2}
          >
            <Text fontSize={"xs"} textAlign={"start"}>
              Welcome to Europe's largest call center database
            </Text>
            <List display={"flex"} gap={4}>
              {customerData.map((item, id) => (
                <ListItem key={`${item.name}.${id}`}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    {item.value}
                  </Text>
                  <Text fontSize={"sm"}>{item.name}</Text>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Wrapper>
    </BgWrapper>
  );
};

export default DesktopHero;
