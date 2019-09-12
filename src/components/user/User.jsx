import React from 'react';
import styles from './User.module.css';

const User = () => (
  <button className={styles.user}>
    <span className={styles.logo} />
    <span className={styles.icon} />
  </button>
);

export default User;
