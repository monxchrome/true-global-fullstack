import AOS from 'aos';
import React, { useEffect } from 'react';

import styles from './styles/user.module.sass';

const User = ({ user }: { user: any }) => {
  const { id, email, role } = user;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Father} data-aos="fade-right">
      <div className={styles.Border}>
        <h4 className={styles.Text}>{id}</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{role}</h4>
      </div>

      <div className={styles.Border}>
        <h4 className={styles.Text}>{email}</h4>
      </div>
    </div>
  );
};

export default User;
