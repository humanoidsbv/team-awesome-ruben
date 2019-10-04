import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Client from '../client/';
import ClientAdd from '../client-add/';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './Clients.module.css';

const Clients = ({ addClient, clients, fetchClients }) => {
  const [isFormVisible, SetIsFormVisible] = useState(false);

  useEffect(function getClients() {
    fetchClients();
  }, []);

  const handleFormVisibility = () => SetIsFormVisible(!isFormVisible);

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
        <React.Fragment key={client.id}>
          <Client client={client} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

Clients.propTypes = {
  addClient: PropTypes.func.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string
    })
  ),
  fetchClients: PropTypes.func.isRequired
};

Clients.defaultProps = {
  clients: []
};

export default Clients;
