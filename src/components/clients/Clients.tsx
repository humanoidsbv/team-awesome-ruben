import React, { useState, useEffect } from 'react';

import Client from '../client';
import ClientAdd from '../client-add';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './Clients.module.css';

import { ClientInterface } from '../../redux/clients/types';

interface ClientsProps {
  addClient: () => void;
  client: ClientInterface;
  clients: ClientInterface[];
  fetchClients: () => void;
}

const Clients = ({
  addClient,
  clients,
  fetchClients
}: ClientsProps): React.ReactElement => {
  const [isFormVisible, SetIsFormVisible] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const handleFormVisibility = (): void => SetIsFormVisible(!isFormVisible);

  return (
    <React.Fragment>
      {isFormVisible && (
        <ClientAdd
          addClient={addClient}
          toggleFormVisibility={handleFormVisibility}
        />
      )}
      <div className={styles.header}>
        <span className={styles.heading}>All Clients</span>
        <button
          className={`${styles.addMember}
            ${isFormVisible && styles.addMemberVisible}`}
          disabled={isFormVisible}
          onClick={handleFormVisibility}
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
      {clients.map(client => (
        <Client client={client} key={client.id} />
      ))}
    </React.Fragment>
  );
};

export default Clients;
