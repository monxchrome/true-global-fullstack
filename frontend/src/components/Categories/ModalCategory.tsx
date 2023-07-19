import React from "react";
import styles from './styles/modal-category.module.sass'
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { Button, ButtonProps, TextField } from "@mui/material";
import { CreateCategoryValidationSchema } from "./validators/create-category.validator";
import { styled } from "@mui/material/styles";
import { CREATE_CATEGORY } from "../../mutations/category";

const ModalCategory = ({onClose}: {onClose: any}) => {
  const [createCategory] = useMutation(CREATE_CATEGORY)

  const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(4 108 0 / 50%);",
    backgroundColor: "rgb(4 108 0 / 100%);",
    color: "#1b011e",
    width: "7vw",
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
    width: "7vw",
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
    },
    validationSchema: CreateCategoryValidationSchema,
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('access');

        const { data } = await createCategory({
          variables: {
            name: values.name,
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
          Create category
        </h2>
      </div>
      <div>
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
    </div>
  );
};

export default ModalCategory;
