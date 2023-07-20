import { Backdrop, Button, ButtonProps, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import ModalTask from '../Tasks/ModalTask';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import styles from './styles/category.module.sass';

const Category = ({ category }: { category: any }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const { id, name, startDate, tasks } = category;

  const formattedDate = moment(startDate).format('DD.MM.YYYY');

  const tasksCount = Array.isArray(tasks) ? tasks.length : '0';

  const handleOpenEdit = () => setOpenEdit(true);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleOpenTask = () => setOpenTask(true);

  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleCloseTask = () => setOpenTask(false);

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const TaskButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(255 179 0 / 50%);',
    backgroundColor: 'rgb(161 112 0 / 100%);',
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Father} data-aos="fade-right">
      <div className={styles.Border}>
        <h4 className={styles.Text}>{name}</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{tasksCount} tasks</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{formattedDate}</h4>
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
        <EditModal onClose={handleCloseEdit} categoryId={id} />
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
        <DeleteModal onClose={handleCloseDelete} categoryId={id} />
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTask}
        onClose={handleCloseTask}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className={styles.ModalFather}
      >
        <ModalTask onClose={handleCloseTask} categoryId={id} />
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
        <TaskButton
          variant="contained"
          size="large"
          onClick={handleOpenTask}
          className={styles.Button}
        >
          TASKS
        </TaskButton>
      </div>
    </div>
  );
};

export default Category;
