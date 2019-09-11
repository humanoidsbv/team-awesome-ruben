import React from 'react';
import styles from './NavigationToggle.module.css';

const NavigationToggle = () => (
  <button type="button" className={styles.toggle}>
    <span className={styles.menuIcon}>=</span>
    <span className={styles.closeIcon}>x</span>
  </button>
);

export default NavigationToggle;
