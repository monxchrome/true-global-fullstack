import React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";
import styles from './styles/start.module.sass'
import { NavLink } from "react-router-dom";

const Start = () => {

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(254 254 254 / 50%);",
    backgroundColor: "rgb(254 254 254 / 100%);",
    color: "#1b011e",
    width: "15vw",
    height: "7vh",
    borderRadius: "100px",
    '&:hover': {
      boxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      webkitBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      mozBoxShadow: "0px -1px 37px 0px rgba(255,255,255,0.75);",
      backgroundColor: "rgb(254 254 254 / 100%);",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  return (
    <div className={styles.Father}>
      <NavLink to={'login'}>
        <ColorButton variant="contained" size="large">Get Started</ColorButton>
      </NavLink>
    </div>
  );
};

export default Start;
