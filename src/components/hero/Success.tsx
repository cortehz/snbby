import React, { useContext } from "react";
import { Divider, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { FormContext } from "../../store/FormContext";

const Success: React.FunctionComponent = () => {
  const { form } = useContext(FormContext);

  return (
    <Flex
      flexDir={"column"}
      bg={"white"}
      color={"snubesGray"}
      p={12}
      borderRadius={"md"}
    >
      <Text fontWeight={"bold"} fontSize={"2xl"} textAlign="center">
        Thank you for your request!
      </Text>
      <Text fontSize={"sm"} textAlign="center" color={"snubesGray"} mb={8}>
        You’ve taken the first step. Our experts will get in touch with you
        soon.
      </Text>
      <Divider maxW={"75%"} margin={"auto"} />

      <List mt={8} display={"flex"} gap={4} flexDir={"column"}>
        {form &&
          Object.keys(form).map((key, id) => (
            <ListItem
              key={`${key}.${id}`}
              display={"flex"}
              gap={[0, 8]}
              flexDir={["column", "row"]}
            >
              <Flex
                alignItems={"center"}
                flex={1}
                justifyContent={["flex-start", "flex-end"]}
              >
                <Text fontSize={"sm"}>{key}</Text>
              </Flex>

              <Text flex={3} fontSize={"xl"} fontWeight={"bold"}>
                {form[key]}
              </Text>
            </ListItem>
          ))}
      </List>
    </Flex>
  );
};

export default Success;
