import * as yup from "yup";

export const RegisterValidationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 3 characters length')
    .required('Password is required'),
  role: yup
    .string()
    .min(1, 'Role should be of minimum 1 characters length')
    .required('Role is required'),
});
