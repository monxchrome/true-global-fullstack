import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import git from '../../static/git.png';
import styles from './styles/header.module.sass';

const Header = () => {
  const [fix, setFix] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    border: '1px solid rgb(254 254 254 / 50%);',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(254 254 254 / 50%);',
      border: '1px solid rgb(254 254 254 / 50%);',
    },
  }));

  const setFixed = () => {
    if (window.scrollY >= 1100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', setFixed);

  return (
    <div className={fix ? `${styles.Fixed}` : `${styles.Header}`}>
      <header className={styles.Header}>
        <div>
          <div>
            <img src={git} alt="" className={styles.Logo} />
          </div>
        </div>
        <div className={styles.Buttons}>
          <div>
            <NavLink to={'users'}>
              <ColorButton variant="outlined" size="large">
                Users
              </ColorButton>
            </NavLink>
          </div>
          <div>
            <NavLink to={'categories'}>
              <ColorButton variant="outlined" size="large">
                Categories
              </ColorButton>
            </NavLink>
          </div>
          <div>
            <NavLink to={'tasks'}>
              <ColorButton variant="outlined" size="large">
                Tasks
              </ColorButton>
            </NavLink>
          </div>
          <div>
            <NavLink to={'login'}>
              <ColorButton variant="outlined" size="large">
                LogIn
              </ColorButton>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
