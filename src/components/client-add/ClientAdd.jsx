import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientAdd.module.css';
import Input from '../../../shared/components/input/';

const ClientAdd = ({ addClient, toggleFormVisibility }) => {
  const [branch, setBranch] = useState('');
  const [branchAdress, setBranchAdress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [locality, setLocality] = useState('');
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
    setCompanyName('');
    setLocality('');
    setPostalCode('');
    toggleFormVisibility();
  };

  const handleSubmit = event => {
    event.preventDefault();

    addClient({
      branch,
      branchAdress,
      companyName,
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
          <Input
            handleBlur={handleBlur}
            inputText="Client"
            inputValue={companyName}
            name="companyName"
            setInputValue={setCompanyName}
            validity={validity}
          />
          <Input
            handleBlur={handleBlur}
            inputText="Branch"
            inputValue={branch}
            name="branch"
            setInputValue={setBranch}
            validity={validity}
          />
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.inputContainer}>
          <Input
            handleBlur={handleBlur}
            inputText="Branch Adress"
            inputValue={branchAdress}
            name="BranchAdress"
            setInputValue={setBranchAdress}
            validity={validity}
          />
          <Input
            halfWidth="true"
            handleBlur={handleBlur}
            inputText="Postal code"
            inputValue={postalCode}
            name="postalCode"
            setInputValue={setPostalCode}
            validity={validity}
          />
          <Input
            halfWidth="true"
            handleBlur={handleBlur}
            inputText="Location"
            inputValue={locality}
            name="locality"
            setInputValue={setLocality}
            validity={validity}
          />
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
  addClient: PropTypes.func.isRequired,
  toggleFormVisibility: PropTypes.func.isRequired
};

export default ClientAdd;
