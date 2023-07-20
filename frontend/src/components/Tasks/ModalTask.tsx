import { useMutation } from '@apollo/client';
import { Button, ButtonProps, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import React from 'react';

import { CREATE_TASK } from '../../mutations';
import styles from './styles/modal-task.module.sass';
import { CreateTaskValidationSchema } from './validators/create-task.validator';

const ModalTask = ({
  onClose,
  categoryId,
}: {
  onClose: any;
  categoryId: any;
}) => {
  const [createTask] = useMutation(CREATE_TASK);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(4 108 0 / 50%);',
    backgroundColor: 'rgb(4 108 0 / 100%);',
    color: '#1b011e',
    width: '7vw',
    height: '5vh',
    borderRadius: '100px',
    '&:hover': {
      boxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      webkitBoxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      mozBoxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      backgroundColor: 'rgb(254 254 254 / 100%);',
      border: '1px solid rgb(254 254 254 / 50%);',
    },
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(108 0 0 / 50%);',
    backgroundColor: 'rgb(108 0 0 / 100%);',
    color: '#1b011e',
    width: '7vw',
    height: '5vh',
    borderRadius: '100px',
    '&:hover': {
      boxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      webkitBoxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      mozBoxShadow: '0px -1px 37px 0px rgba(255,255,255,0.75);',
      backgroundColor: 'rgb(254 254 254 / 100%);',
      border: '1px solid rgb(254 254 254 / 50%);',
    },
  }));

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      endDate: '',
    },
    validationSchema: CreateTaskValidationSchema,
    onSubmit: async (values) => {
      try {
        localStorage.getItem('access');

        await createTask({
          variables: {
            name: values.name,
            description: values.description,
            endDate: values.endDate,
            categoryId: categoryId,
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
        <h2 className={styles.ModalText}>Create category</h2>
      </div>
      <div>
        <div>
          <div className={styles.Input}>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.InputDiv}>
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
              </div>

              <div className={styles.InputDiv}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </div>

              <div className={styles.InputDiv}>
                <TextField
                  fullWidth
                  id="endDate"
                  name="endDate"
                  label="End date"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.endDate && Boolean(formik.errors.endDate)
                  }
                  helperText={formik.touched.endDate && formik.errors.endDate}
                />
              </div>

              <div className={styles.Wrap}>
                <div>
                  <SubmitButton variant="contained" size="large" type="submit">
                    Submit
                  </SubmitButton>
                </div>
                <div>
                  <CancelButton
                    variant="contained"
                    size="large"
                    onClick={onClose}
                  >
                    Cancel
                  </CancelButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
