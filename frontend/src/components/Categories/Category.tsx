import React, { useEffect } from "react";
import AOS from "aos";
import styles from './styles/category.module.sass'
import moment from "moment";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const Category = ({category}: { category: any }) => {
  const {name, startDate, tasks} = category

  const formattedDate = moment(startDate).format('DD.MM.YYYY')

  const tasksCount = Array.isArray(tasks) ? tasks.length : '0';

  const EditButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(4 108 0 / 50%);",
    backgroundColor: "rgb(68 255 100 / 100%);",
    color: "#1b011e",
    width: "5vw",
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

  const DeleteButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(108 0 0 / 50%);",
    backgroundColor: "rgb(255 68 68 / 100%);",
    color: "#1b011e",
    width: "5vw",
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

  useEffect(() => {
    AOS.init();
  }, [])

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

      <div className={styles.Wrap}>
        <EditButton
          variant="contained"
          size="large"
          className={styles.Button}>EDIT</EditButton>
        <DeleteButton
          variant="contained"
          size="large"
          className={styles.Button}>DELETE</DeleteButton>
      </div>
    </div>
  );
};

export default Category;