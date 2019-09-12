import React from 'react';
import styles from './NavigationToggle.module.css';

import PropTypes from 'prop-types';

const NavigationToggle = ({ isMenuVisible, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    type="button"
    className={`${styles.toggle} ${isMenuVisible ? styles.menuVisible : ''}`}
  >
    <span className={styles.menuIcon}>=</span>
    <span className={styles.closeIcon}>x</span>
  </button>
);

// menuVisible

NavigationToggle.propTypes = {
  isMenuVisible: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default NavigationToggle;
