import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './Navigation.module.css';

const Navigation = ({ isMenuVisible }) => (
  <nav className={`${styles.nav} ${isMenuVisible ? styles.navActive : ''}`}>
    <Link to="/" className={`${styles.item} ${styles.itemActive}`}>
      Timesheets
    </Link>
    <Link to="/team-members" className={styles.item}>
      Team members
    </Link>
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
