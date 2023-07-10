import React, { useState } from "react";
import styles from './styles/header.module.sass'
import { Button, ButtonProps } from "@mui/material";
import git from '../../static/git.png'
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [fix, setFix] = useState(false)

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: "1px solid rgb(254 254 254 / 50%);",
    color: "white",
    '&:hover': {
      backgroundColor: "rgb(254 254 254 / 50%);",
      border: "1px solid rgb(254 254 254 / 50%);",
    },
  }));

  const setFixed = () => {
    if(window.scrollY >= 1100) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)

  return (
    <div className={ fix ? `${styles.Fixed}` : `${styles.Header}`}>
      <header className={styles.Header}>
        <div>
          <div>
            <img src={git} alt="" className={styles.Logo}/>
          </div>
        </div>
        <div className={styles.Buttons}>
          <div>
            <ColorButton variant="outlined" size="large">Users</ColorButton>
          </div>
          <div>
            <ColorButton variant="outlined" size="large">Categories</ColorButton>
          </div>
          <div>
            <ColorButton variant="outlined" size="large">Tasks</ColorButton>
          </div>
          <div>
            <NavLink to={'login'}>
              <ColorButton variant="outlined" size="large">LogIn</ColorButton>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
