import React from 'react';
import styles from './User.module.css';

const User = () => (
  <button class={styles.user}>
    <span class={styles.logo}></span>
    <span class={styles.icon}></span>
  </button>
);

export default User;
