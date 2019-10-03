import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientAdd.module.css';

const ClientAdd = ({ addClientData, toggleFormVisibility }) => {
  const [branch, setBranch] = useState('');
  const [client, setClient] = useState('');
  const [locality, setLocality] = useState('');
  const [branchAdress, setBranchAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [validity, setValidity] = useState({});

  const formRef = useRef(null);

  const handleBlur = event => {
    // Descontruct a dynamic value from an object and keep the remainder
    if (event.target.value === '') {
      const { [event.target.name]: inputValidity, ...restValidity } = validity;
      setValidity(restValidity);
      return;
    }

    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleCloseForm = () => {
    setBranch('');
    setBranchAdress('');
    setClient('');
    setLocality('');
    setPostalCode('');
    toggleFormVisibility();
  };

  const handleSubmit = event => {
    event.preventDefault();

    addClientData({
      branch,
      branchAdress,
      client,
      id: Math.random(),
      locality,
      postalCode
    });
    handleCloseForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formTab}>
        <span>Client Details</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="client">
            <span className={styles.labelText}>Client</span>
            <input
              className={`${styles.input}
                ${validity.client === false && styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="client"
              onBlur={handleBlur}
              onChange={({ target }) => setClient(target.value)}
              required
              value={client}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="branch">
            <span className={styles.labelText}>Branch</span>
            <input
              className={`${styles.input} ${validity.branch === false &&
                styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="branch"
              onBlur={handleBlur}
              onChange={({ target }) => setBranch(target.value)}
              required
              value={branch}
            />
          </label>
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.inputContainer}>
          <label className={`${styles.label}`} htmlFor="branchAdress">
            <span className={styles.labelText}>Branch adress</span>
            <input
              className={`${styles.input} 
              ${validity.branchAdress === false && styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="branchAdress"
              onBlur={handleBlur}
              onChange={({ target }) => setBranchAdress(target.value)}
              required
              value={branchAdress}
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="postalCode"
          >
            <span className={styles.labelText}>Postal code</span>
            <input
              className={`${styles.input} 
              ${validity.postalCode === false && styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="postalCode"
              onBlur={handleBlur}
              onChange={({ target }) => setPostalCode(target.value)}
              required
              value={postalCode}
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="locality"
          >
            <span className={styles.labelText}>Location</span>
            <input
              className={`${styles.input} 
              ${validity.locality === false && styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="locality"
              onBlur={handleBlur}
              onChange={({ target }) => setLocality(target.value)}
              required
              value={locality}
            />
          </label>
        </div>
      </form>
      <div className={styles.header}>
        <span className={styles.heading}>Add New Client</span>
        <button
          className={styles.cancelButton}
          onClick={handleCloseForm}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.addMemberButton}
          disabled={validity.form !== true}
          onClick={handleSubmit}
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

ClientAdd.propTypes = {
  addClientData: PropTypes.func.isRequired,
  toggleFormVisibility: PropTypes.func.isRequired
};

export default ClientAdd;
