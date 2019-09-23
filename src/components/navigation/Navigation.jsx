import React from 'react';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

const Navigation = ({ isMenuVisible }) => (
  <nav className={`${styles.nav} ${isMenuVisible ? styles.navActive : ''}`}>
    <a className={`${styles.item} ${styles.itemActive}`} href="/">
      Timesheets
    </a>
    <a className={styles.item} href="/">
      Team members
    </a>
    <a className={styles.item} href="/">
      Projects
    </a>
    <a className={styles.item} href="/">
      Clients
    </a>
    <a className={styles.item} href="/">
      Documents
    </a>
  </nav>
);

Navigation.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired
};

export default Navigation;
