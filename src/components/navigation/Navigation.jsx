import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <a className={`${styles.item} ${styles.itemActive}`} href="/">
      Timesheets
    </a>
    <a className={styles.item} href="/about.html">
      Team members
    </a>
    <a className={styles.item} href="/about.html">
      Projects
    </a>
    <a className={styles.item} href="/about.html">
      Clients
    </a>
    <a className={styles.item} href="/about.html">
      Documents
    </a>
  </nav>
);

export default Navigation;
