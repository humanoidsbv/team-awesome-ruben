import React from 'react';
import { Link } from 'gatsby';

import styles from './Navigation.module.css';

interface NavigationProps {
  isMenuVisible: boolean;
}

const Navigation = ({ isMenuVisible }: NavigationProps): React.ReactElement => (
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
    <button type="button" className={styles.item}>
      Documents
    </button>
  </nav>
);

export default Navigation;
