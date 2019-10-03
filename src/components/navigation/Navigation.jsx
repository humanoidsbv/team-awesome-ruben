import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './Navigation.module.css';

const Navigation = ({ isMenuVisible }) => (
  <nav className={`${styles.nav} ${isMenuVisible ? styles.navActive : ''}`}>
    <Link to="/" className={styles.item} activeClassName={styles.itemActive}>
      Time entries
    </Link>
    <Link
      activeClassName={styles.itemActive}
      className={styles.item}
      to="/team-members"
    >
      Team members
    </Link>
    <button type="button" className={styles.item}>
      Projects
    </button>
    <Link
      activeClassName={styles.itemActive}
      className={styles.item}
      to="/clients"
    >
      Clients
    </Link>
    <button type="button" className={styles.item} href="/">
      Documents
    </button>
  </nav>
);

Navigation.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired
};

export default Navigation;
