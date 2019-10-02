import React, { useState } from 'react';

import Client from '../client/';
import ClientAdd from '../client-add/';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './Clients.module.css';

const Clients = () => {
  const [isFormVisible, SetIsFormVisible] = useState(false);

  const handleFormVisible = () => SetIsFormVisible(!isFormVisible);

  //* Todo: add client in database when connected
  const addClient = () => 0;

  return (
    <React.Fragment>
      {isFormVisible && (
        <ClientAdd
          addFormData={addClient}
          handleFormVisible={handleFormVisible}
        />
      )}
      <div className={styles.header}>
        <span className={styles.heading}>All Clients</span>
        <button
          className={`${styles.addMember} ${
            isFormVisible ? styles.addMemberVisible : ''
          }`}
          disabled={isFormVisible === true}
          onClick={handleFormVisible}
          type="button"
        >
          <IconPlus className={styles.addNewIcon} />
          New Client
        </button>
        <button type="button" className={styles.sortMembers}>
          Sort by:
          <IconArrowDown />
        </button>
      </div>
      <Client />
    </React.Fragment>
  );
};

export default Clients;
