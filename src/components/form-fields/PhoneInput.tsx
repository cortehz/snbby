import React from "react";
import "./styles.css";
import PhoneInput from "react-phone-input-2";
import {
  Box,
  Flex,
  FormErrorMessage,
  Text,
  FormControl,
} from "@chakra-ui/react";
import { useField } from "formik";

interface PhoneProps {
  name: string;
  label: string;
  countryCode: string;
}

const CustomInput: React.FC<PhoneProps> = ({
  name,
  countryCode,
  label,
  ...rest
}) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField(name);

  const handleInputChange = (e: any) => {
    if (!touched) {
      setTouched(true);
    }
    setValue(e);
  };
  return (
    <FormControl
      gap={4}
      isInvalid={touched && !!error}
      display={"flex"}
      id={name}
      flexDir={["column", "row"]}
    >
      <Box alignSelf={["flex-start", "center"]} flex={0.5}>
        <Text textAlign={"right"}>{label}</Text>
      </Box>
      <Flex flex={3} flexDir={"column"}>
        <PhoneInput
          value={value}
          specialLabel={""}
          inputProps={{ name: name }}
          country={countryCode}
          onChange={handleInputChange}
          inputStyle={{
            borderColor: touched && error ? "red" : "",
          }}
          {...rest}
        />
        {touched && error && (
          <FormErrorMessage textAlign={"start"}>{error}</FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  );
};

export default CustomInput;
