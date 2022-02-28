import * as Yup from "yup";

export const errorMessages = {
  required: "This field is mandatory and must be filled out.",
  numb: "Please enter a valid number.",
  email: "Please enter a valid email address.",
  nameMax: "Name cannot be more than 50 characters.",
  companyMax: "Company name must not be more than 80 characters.",
  minNumb: "Phone number cannot be less than 10.",
  companyString: "Company name must be a letter.",
};

export const formValidator = {
  stringName: Yup.string()
    .trim()
    .max(50, errorMessages?.nameMax)
    .required(errorMessages?.required),
  stringCompany: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]*$/, errorMessages?.companyString)
    .max(80, errorMessages?.companyMax)
    .required(errorMessages?.required),
  email: Yup.string()
    .email(errorMessages?.email)
    .required(errorMessages?.required),
  stringNumber: Yup.string()
    .required(errorMessages?.required)
    .matches(/^[0-9]+$/, errorMessages?.numb)
    .min(10, errorMessages?.minNumb),
};
