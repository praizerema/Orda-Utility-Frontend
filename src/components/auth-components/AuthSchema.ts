import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 characters")
    .max(20, "password must not exceed 15 characters"),
});

export const registerSchema = yup.object().shape({
  first_name: yup.string().required("Your First Name is Required"),
  last_name: yup.string().required("Your Last Name is Required"),
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 characters")
    .max(20, "password must not exceed 15 characters"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password must be match."),
});
