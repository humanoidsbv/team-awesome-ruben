import React from 'react';

import MenuClose from '../../assets/icons/icon-close.svg';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import styles from './NavigationToggle.module.css';

interface NavigationToggle {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

const NavigationToggle = ({
  isMenuVisible,
  toggleMenu
}: NavigationToggle): React.ReactElement => (
  <button
    className={`${styles.toggle} ${isMenuVisible ? styles.menuVisible : ''}`}
    onClick={toggleMenu}
    type="button"
  >
    <MenuIcon className={styles.menuIcon} />
    <MenuClose className={styles.closeIcon} />
  </button>
);

export default NavigationToggle;
