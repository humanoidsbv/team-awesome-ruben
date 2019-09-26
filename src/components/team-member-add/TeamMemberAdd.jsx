import React from 'react';

import styles from './TeamMemberAdd.module.css';
import IconPlus from '../../assets/icons/icon-plus.svg';

const TeamMemberAdd = () => {
  return (
    <React.Fragment>
      <button className={styles.showForm} type="button">
        <IconPlus className={styles.showFormIcon} />
        New Humanoid
      </button>
    </React.Fragment>
  );
};

export default TeamMemberAdd;
