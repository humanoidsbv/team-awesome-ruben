import React, { useState } from 'react';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import NavigationToggle from '../navigation-toggle/NavigationToggle';
import ProfileButton from '../profilebutton/ProfileButton';
import styles from './Header.module.css';

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
      <ProfileButton />
    </header>
  );
};

export default Header;
