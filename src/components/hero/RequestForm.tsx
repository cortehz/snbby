import React, { useContext, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../form-fields/Input";
import * as Yup from "yup";
import { formValidator } from "../../utils/formValidator";
import { Button, Flex, Text } from "@chakra-ui/react";
import CustomInput from "../form-fields/PhoneInput";
import Success from "./Success";
import { FormContext } from "../../store/FormContext";

interface RequestFormProps {}

const validationSchema = Yup.object({
  company: formValidator.stringCompany,
  name: formValidator.stringName,
  phone: formValidator.stringNumber,
  email: formValidator.email,
});
export interface FormValues {
  company: string;
  name: string;
  phone: string;
  email: string;
}

const RequestForm: React.FunctionComponent<RequestFormProps> = () => {
  const { form, setForm } = useContext(FormContext);
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(false);

  //get user country code from browser and set it to state
  //if unavailable use default country code in phone input
  const getData = async () => {
    try {
      const res = await fetch("https://geolocation-db.com/json/");
      const data = await res.json();
      setCountryCode(data.country_code.toLowerCase());
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = (
    { name, company, phone, email }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      //make API call to submit form data
      //submited status and form values are set to state
      setForm({ company, name, phone, email });
      setError(false);
      resetForm(); //reset form after submit
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!form ? (
        <Formik
          initialValues={{
            company: "",
            name: "",
            phone: "",
            email: "",
          }}
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Flex
              flexDir={"column"}
              bg={"white"}
              p={[8, 12]}
              borderRadius={"md"}
              color={"snubesGray"}
            >
              <Text
                fontWeight={"bold"}
                fontSize={"2xl"}
                textAlign={["start", "center"]}
              >
                Find inbound call centers for your company
              </Text>
              <Text
                fontSize={"sm"}
                textAlign={["start", "center"]}
                color={"snubesGray"}
              >
                Use our AI and Big Data driven call center sourcing solution.
              </Text>
              <Flex flexDir={"column"} gap={4} justifyContent={"center"} mt={4}>
                <Input
                  name="company"
                  placeholder="Company"
                  label="Company"
                  type={"text"}
                />
                <Input name="name" placeholder="Full name" label="Name" />
                <Input
                  name="email"
                  placeholder="Email"
                  label="Email"
                  type={"email"}
                />
                <CustomInput
                  name="phone"
                  label={"Phone"}
                  countryCode={countryCode}
                />
                <Button
                  aria-label="submit"
                  type="submit"
                  colorScheme={"blue"}
                  px={12}
                  w={"65%"}
                  margin={"1rem auto"}
                >
                  Get informed
                </Button>
              </Flex>
              {error && (
                <Text textAlign={"center"} color={"red"}>
                  An error occured submitted your request
                </Text>
              )}
            </Flex>
          </Form>
        </Formik>
      ) : (
        <Success />
      )}
    </>
  );
};

export default RequestForm;
