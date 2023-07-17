import React from "react";
import styles from './styles/edit-modal.module.sass'
import { Button, ButtonProps, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMutation } from "@apollo/client";
import { UPDATE_CATEGORY } from "../../mutations/category";
import { useFormik } from "formik";
import { UpdateCategoryValidationSchema } from "./validators/update-category.validator";
import { parseISO } from 'date-fns';

const EditModal = ({onClose, categoryId}: {onClose: any, categoryId: any}) => {
  const [updateCategory] = useMutation(UPDATE_CATEGORY);

  const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(4 108 0 / 50%);",
    backgroundColor: "rgb(4 108 0 / 100%);",
    color: "#1b011e",
    width: "10vw",
    height: "5vh",
    borderRadius: "100px",
    '&:hover': {
      boxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      webkitBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      mozBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      backgroundColor: "rgb(254 254 254 / 100%);",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(108 0 0 / 50%);",
    backgroundColor: "rgb(108 0 0 / 100%);",
    color: "#1b011e",
    width: "10vw",
    height: "5vh",
    borderRadius: "100px",
    '&:hover': {
      boxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      webkitBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      mozBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      backgroundColor: "rgb(254 254 254 / 100%);",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '',
    },
    validationSchema: UpdateCategoryValidationSchema,
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('access');

        const { data } = await updateCategory({
          variables: {
            categoryId: categoryId,
            name: values.name,
            startDate: parseISO(values.startDate)
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className={styles.Modal}>
      <div>
        <h2 className={styles.ModalText}>
          Edit category
        </h2>
      </div>
      <div>
        <div className={styles.Input}>
          <form onSubmit={formik.handleSubmit}>

            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              fullWidth
              id="startDate"
              name="startDate"
              label="Start Date"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.startDate && Boolean(formik.errors.startDate)}
              helperText={formik.touched.startDate && formik.errors.startDate}
            />

            <div className={styles.Wrap}>
              <div>
                <SubmitButton variant="contained" size="large" type="submit">Submit</SubmitButton>
              </div>
              <div>
                <CancelButton variant="contained" size="large" onClick={onClose}>Cancel</CancelButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
