import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationToggle.module.css';

import MenuClose from '../../../assets/icons/icon-close.svg';
import MenuIcon from '../../../assets/icons/icon-menu.svg';

const NavigationToggle = ({ MenuVisibility, toggleMenu }) => (
  <button
    className={`${styles.toggle} ${MenuVisibility ? styles.menuVisible : ''}`}
    onClick={toggleMenu}
    type="button"
  >
    <MenuIcon className={styles.menuIcon} />
    <MenuClose className={styles.closeIcon} />
  </button>
);

NavigationToggle.propTypes = {
  MenuVisibility: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default NavigationToggle;
