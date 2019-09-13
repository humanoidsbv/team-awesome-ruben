import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationToggle.module.css';
import MenuIcon from '../../../assets/icons/icon-menu.svg';
import MenuClose from '../../../assets/icons/icon-close.svg';

const NavigationToggle = ({ isMenuVisible, toggleMenu }) => (
  <button
    className={`${styles.toggle} ${isMenuVisible ? styles.menuVisible : ''}`}
    onClick={toggleMenu}
    type="button"
  >
    <MenuIcon className={styles.menuIcon} />
    <MenuClose className={styles.closeIcon} />
  </button>
);

NavigationToggle.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default NavigationToggle;
