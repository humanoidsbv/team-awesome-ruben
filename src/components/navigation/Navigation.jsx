import React from 'react';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

const Navigation = ({ isMenuVisible }) => (
  <nav className={`${styles.nav} ${isMenuVisible ? styles.navActive : ''}`}>
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

Navigation.propTypes = {
  isMenuVisible: PropTypes.bool,
};

export default Navigation;
