import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TASKS } from "../../query/task";
import AOS from "aos";
import styles from './styles/tasks.module.sass'
import moon from "../../static/moon.png";
import frontmountains from "../../static/frontmountains.png";
import backmountains from "../../static/backmountains.png";
import Task from "./Task";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const Tasks = () => {
  const {data, loading, error} = useQuery(GET_ALL_TASKS)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if(!loading) {
      setTasks(data.getAllTasks)
    }
  }, [data, loading])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <section data-aos="fade-up" className={styles.section}>
        <img src={moon} alt="" className={styles.Moon} id="moon" />
        <img src={frontmountains} alt="" className={styles.Front} id="frontmountains" />
        <h2 className={styles.Text}>Users List</h2>
        <img src={backmountains} alt="" id="backmountains" />
      </section>

      <div className={styles.DescDiv}>
        <h2 className={styles.TextDesc} data-aos="fade-up">Tasks, Date and Name</h2>
      </div>

      <div className={styles.Father}>
        <div className={styles.Border}>
          {tasks.map((task:any) => <Task key={task.id} task={task}/>)}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
