import * as yup from 'yup';

export const LoginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
