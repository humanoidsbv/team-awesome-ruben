import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientAdd.module.css';

const ClientAdd = ({ addFormData, handleFormVisible }) => {
  const [branch, setBranch] = useState('');
  const [client, setClient] = useState('');
  const [locality, setLocality] = useState('');
  const [mainAdress, setMainAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [validity, setValidity] = useState({ undefined });

  const formRef = useRef(null);

  const handleBlur = event => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleCloseForm = () => {
    handleFormVisible();
    setBranch('');
    setClient('');
    setLocality('');
    setMainAdress('');
    setPostalCode('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    addFormData({ client });
    handleCloseForm();
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.formTab}>
        <span>Client Details</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="firstName">
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
          <label className={`${styles.label}`} htmlFor="mainAdress">
            <span className={styles.labelText}>Branch adress</span>
            <input
              className={`${styles.input} 
              ${validity.mainAdress === false && styles.invalidInput}`}
              maxLength="30"
              minLength="2"
              name="mainAdress"
              onBlur={handleBlur}
              onChange={({ target }) => setMainAdress(target.value)}
              required
              value={mainAdress}
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
    </div>
  );
};

ClientAdd.propTypes = {
  addFormData: PropTypes.func.isRequired,
  handleFormVisible: PropTypes.func.isRequired
};

export default ClientAdd;
