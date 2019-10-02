import React from 'react';

import DeleteIcon from '../../assets/icons/icon-delete.svg';
import styles from './Client.module.css';

const Client = () => {
  const client = 'Port of Rotterdam';
  const contact = 'Bertjan Hendriksen';

  return (
    <div className={styles.container}>
      <span>{client}</span>
      <button
        className={styles.deleteEntry}
        onClick={() => console.log('Delete client')}
        type="button"
      >
        <DeleteIcon className={styles.deleteIcon} />
        Delete
      </button>
      <div className={styles.infoContainer}>
        <span className={styles.infoContainerMain}>{contact}</span>
        <span className={styles.infoContainerContext}>Contact</span>
      </div>
    </div>
  );
};

export default Client;
