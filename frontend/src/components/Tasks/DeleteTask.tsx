import { useMutation } from '@apollo/client';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { DELETE_TASK } from '../../mutations';
import styles from './styles/delete-task.module.sass';

const DeleteTask = ({ onClose, taskId }: { onClose: any; taskId: any }) => {
  const [deleteTask] = useMutation(DELETE_TASK);

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

  const handleDelete = async () => {
    try {
      await deleteTask({ variables: { taskId } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className={styles.Modal}>
        <div>
          <h2 className={styles.ModalText}>Delete category</h2>
        </div>

        <div>
          <h4 className={styles.ModalDesc}>
            Do you want to delete this category?
          </h4>
        </div>

        <div className={styles.Wrap}>
          <div>
            <SubmitButton
              variant="contained"
              size="large"
              type="submit"
              onClick={handleDelete}
            >
              Delete
            </SubmitButton>
          </div>
          <div>
            <CancelButton variant="contained" size="large" onClick={onClose}>
              Cancel
            </CancelButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
