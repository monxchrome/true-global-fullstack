import { useQuery } from '@apollo/client';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';

import { GET_ALL_USERS } from '../../query';
import backmountains from '../../static/backmountains.png';
import frontmountains from '../../static/frontmountains.png';
import moon from '../../static/moon.png';
import styles from './styles/users.module.sass';
import User from './User';

const Users = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data, loading]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section data-aos="fade-up" className={styles.section}>
        <img src={moon} alt="" className={styles.Moon} id="moon" />
        <img
          src={frontmountains}
          alt=""
          className={styles.Front}
          id="frontmountains"
        />
        <h2 className={styles.Text}>Users List</h2>
        <img src={backmountains} alt="" id="backmountains" />
      </section>

      <div className={styles.DescDiv}>
        <h2 className={styles.TextDesc} data-aos="fade-up">
          Users ID, Email and Roles
        </h2>
      </div>

      <div className={styles.Father}>
        <div className={styles.Border}>
          {users.map((user: any) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
