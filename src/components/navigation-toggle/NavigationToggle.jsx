import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationToggle.module.css';

const NavigationToggle = ({ isMenuVisible, toggleMenu }) => (
  <button
    className={`${styles.toggle} ${isMenuVisible ? styles.menuVisible : ''}`}
    onClick={toggleMenu}
    type="button"
  >
    <span className={styles.menuIcon}>=</span>
    <span className={styles.closeIcon}>x</span>
  </button>
);

NavigationToggle.propTypes = {
  isMenuVisible: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default NavigationToggle;
