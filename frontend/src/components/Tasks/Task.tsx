import { Backdrop, Button, ButtonProps, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import styles from './styles/task.module.sass';

const Task = ({ task }: { task: any }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const { id, name, startDate, endDate } = task;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const EditButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(4 108 0 / 50%);',
    backgroundColor: 'rgb(68 255 100 / 100%);',
    color: '#1b011e',
    width: '5vw',
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
  const DeleteButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(108 0 0 / 50%);',
    backgroundColor: 'rgb(255 68 68 / 100%);',
    color: '#1b011e',
    width: '5vw',
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

  const handleOpenEdit = () => setOpenEdit(true);
  const handleOpenDelete = () => setOpenDelete(true);

  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div className={styles.Father} data-aos="fade-right">
      <div className={styles.Border}>
        <h4 className={styles.Text}>{name}</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{startDate}</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{endDate}</h4>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className={styles.ModalFather}
      >
        <EditTask onClose={handleCloseEdit} taskId={id} />
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className={styles.ModalFather}
      >
        <DeleteTask onClose={handleCloseDelete} taskId={id} />
      </Modal>

      <div className={styles.Wrap}>
        <EditButton
          variant="contained"
          size="large"
          className={styles.Button}
          onClick={handleOpenEdit}
        >
          EDIT
        </EditButton>
        <DeleteButton
          variant="contained"
          size="large"
          onClick={handleOpenDelete}
          className={styles.Button}
        >
          DELETE
        </DeleteButton>
      </div>
    </div>
  );
};

export default Task;
