import {
  FormLabel,
  Input as ChakraInput,
  InputProps,
  FormErrorMessage,
  FormControl,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps = InputProps & {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
};

export const Input: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  name,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name);

  const isInvalid = !!error && touched;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel
        mb={0}
        display={"flex"}
        alignItems={isInvalid ? "flex-start" : "center"}
        gap={[1, 4]}
        marginInlineEnd={0}
        flexDir={["column", "row"]}
      >
        <Box alignSelf={["flex-start", "center"]} flex={0.5}>
          <Text textAlign={["start", "end"]}>{label}</Text>
        </Box>

        <Flex flexDir={"column"} flex={3} width={"full"}>
          <ChakraInput
            {...field}
            type={type}
            name={name}
            placeholder={placeholder}
            focusBorderColor={isInvalid ? "red.500" : "blue.500"}
            borderColor={isInvalid ? "red.500" : "gray.300"}
            {...rest}
          />
          {isInvalid && <FormErrorMessage>{error}</FormErrorMessage>}
        </Flex>
      </FormLabel>
    </FormControl>
  );
};
