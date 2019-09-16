import React from 'react';
import styles from './ProfileButton.module.css';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import LogoHumanoids from '../../assets/icons/logo-humanoids.svg';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const ProfileButton = () => (
  <button type="button" className={styles.user}>
    <LogoHumanoids className={styles.logo} />
    <img
      alt="ProfileImage"
      className={styles.profileImage}
      src={UserProfileImage}
    />
    <IconArrowDown className={styles.arrow} />
  </button>
);

export default ProfileButton;
