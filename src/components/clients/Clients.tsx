import React, { useState, useEffect } from 'react';

import Client from '../client';
import ClientAdd from '../client-add';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './Clients.module.css';

import { ClientsPropsInterface } from '../../redux/clients/types';

const Clients = ({
  addClient,
  clients,
  fetchClients
}: ClientsPropsInterface): React.ReactElement => {
  const [isFormVisible, SetIsFormVisible] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const handleFormVisibility = () => SetIsFormVisible(!isFormVisible);

  return (
    <React.Fragment>
      {isFormVisible && (
        <ClientAdd
          addClient={addClient}
          data-test="ClientAdd"
          toggleFormVisibility={handleFormVisibility}
        />
      )}
      <div className={styles.header}>
        <span className={styles.heading}>All Clients</span>
        <button
          className={`${styles.addMember} ${
            isFormVisible ? styles.addMemberVisible : ''
          }`}
          disabled={isFormVisible}
          onClick={handleFormVisibility}
          type="button"
          data-test="addMember"
        >
          <IconPlus className={styles.addNewIcon} />
          New Client
        </button>
        <button type="button" className={styles.sortMembers}>
          Sort by:
          <IconArrowDown />
        </button>
      </div>
      {clients.map(client => (
        <Client client={client} key={client.id} />
      ))}
    </React.Fragment>
  );
};

export default Clients;
