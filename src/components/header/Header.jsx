import React from 'react';
import styles from './Header.module.css';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import NavigationToggle from '../navigation-toggle/NavigationToggle';
import User from '../user/User';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuVisible: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }
  render() {
    return (
      <header
        className={`${styles.header} ${
          this.state.isMenuVisible ? styles.headerMobileOpen : ''
        }`}
      >
        <Logo />
        <Navigation isMenuVisible={this.state.isMenuVisible} />
        <NavigationToggle
          isMenuVisible={this.state.isMenuVisible}
          toggleMenu={this.toggleMenu}
        />
        <User />
      </header>
    );
  }
}

export default Header;
