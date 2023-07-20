import * as yup from 'yup';

export const UpdateCategoryValidationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  startedDate: yup.date(),
});
