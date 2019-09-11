import React from 'react';
import styles from './Header.module.css';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import NavigationToggle from '../navigation-toggle/NavigationToggle';
import User from '../user/User';

/*
    Header ** aanpassen naamval
        Navigatie
        User
        Toggle
        Logo

    2 schermen in Visual Studio Code
    Open progamma's in desktop view zien?
*/

const Header = () => (
  <header className={styles.header}>
    <Logo></Logo>
    <Navigation></Navigation>
    <NavigationToggle></NavigationToggle>
    <User></User>
  </header>
);

export default Header;
