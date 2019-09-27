import React from 'react';

import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TeamMemberAdd.module.css';

const TeamMemberAdd = () => {
  return (
    <div className={styles.container}>
      <button className={styles.showForm} type="button">
        <IconPlus className={styles.showFormIcon} />
        New Humanoid
      </button>
    </div>
  );
};

export default TeamMemberAdd;
