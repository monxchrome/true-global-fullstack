import * as yup from 'yup';

export const UpdateTaskValidationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  description: yup
    .string()
    .min(5, 'Description should be of minimum 5 characters length')
    .required('Description is required'),
  endDate: yup.date(),
});
