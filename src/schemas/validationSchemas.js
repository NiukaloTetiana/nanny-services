import * as yup from "yup";

import { emailRegExp } from "../constants/emailRegExp";

export const registrationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min length must be more than 8 chars")
    .max(64, "Max length must be less than 64 chars"),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min length must be more than 8 chars")
    .max(64, "Max length must be less than 64 chars"),
});

export const appointmentSchema = yup.object().shape({
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Min length must be more than 5 symbols")
    .max(60, "Max length must be less than 60 symbols"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(14, "Enter a valid phone number")
    .max(14, "Enter a valid phone number"),
  age: yup
    .string()
    .required("Age is required")
    .min(1, "Enter a valid age")
    .max(2, "Enter a valid age"),
  time: yup
    .date()
    .required("Meeting time is required")
    .min(4, "Enter a valid meeting time"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 symbols"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 symbols")
    .max(32, "Max length must be less than 32 symbols"),
  comment: yup
    .string()
    .required("Comment is required.")
    .min(3, "Min length must be more than 3 symbols")
    .max(64, "Max length must be less than 64 symbols"),
});
