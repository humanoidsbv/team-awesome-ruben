import React, { useState } from 'react';

import Logo from '../logo';
import Navigation from '../navigation';
import NavigationToggle from '../navigation-toggle';
import ProfileButton from '../profilebutton';
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
