import React, { useState } from 'react';

import styles from './Header.module.css';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import NavigationToggle from '../navigation-toggle/NavigationToggle';
import User from '../user/User';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => setIsMenuVisible(!isMenuVisible);

  return (
    <header
      className={`${styles.header} ${
        isMenuVisible ? styles.headerMobileOpen : ''
      }`}
    >
      <Logo />
      <NavigationToggle
        isMenuVisible={isMenuVisible}
        toggleMenu={handleClick}
      />
      <Navigation isMenuVisible={isMenuVisible} />
      <User />
    </header>
  );
};

export default Header;
