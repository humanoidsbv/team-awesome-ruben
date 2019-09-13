import React, { useState } from 'react';

import styles from './Header.module.css';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import NavigationToggle from '../navigation-toggle/NavigationToggle';
import User from '../user/User';

const Header = () => {
  const [MenuVisibility, setMenuVisibility] = useState(false);

  const handleClick = () => setMenuVisibility(!MenuVisibility);

  return (
    <header
      className={`${styles.header} ${
        MenuVisibility ? styles.headerMobileOpen : ''
      }`}
    >
      <Logo />
      <NavigationToggle
        MenuVisibility={MenuVisibility}
        toggleMenu={handleClick}
      />
      <Navigation MenuVisibility={MenuVisibility} />
      <User />
    </header>
  );
};

export default Header;
