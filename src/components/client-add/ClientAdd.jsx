import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientAdd.module.css';
import InputField from '../../../shared/components/input-field/';
import Button from '../../../shared/components/button/';

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
          <InputField
            handleBlur={handleBlur}
            inputText="Client"
            inputValue={companyName}
            isValid={validity.companyName}
            name="companyName"
            setInputValue={setCompanyName}
          />
          <InputField
            handleBlur={handleBlur}
            inputText="Branch"
            inputValue={branch}
            isValid={validity.branch}
            name="branch"
            setInputValue={setBranch}
          />
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.inputContainer}>
          <InputField
            handleBlur={handleBlur}
            inputText="Branch Adress"
            inputValue={branchAdress}
            isValid={validity.branchAdress}
            name="branchAdress"
            setInputValue={setBranchAdress}
          />
          <InputField
            halfWidth
            handleBlur={handleBlur}
            inputText="Postal code"
            inputValue={postalCode}
            isValid={validity.postalCode}
            name="postalCode"
            setInputValue={setPostalCode}
          />
          <InputField
            halfWidth
            handleBlur={handleBlur}
            inputText="Location"
            inputValue={locality}
            isValid={validity.locality}
            name="locality"
            setInputValue={setLocality}
          />
        </div>
      </form>
      <div className={styles.header}>
        <span className={styles.heading}>Add New Client</span>
        <div className={styles.fullWidth}>
          <Button onClick={handleCloseForm} innerText="Cancel" />
          <Button
            disabled={validity.form !== true}
            onClick={handleSubmit}
            innerText="Save"
          />
        </div>
      </div>
    </div>
  );
};

ClientAdd.propTypes = {
  addClient: PropTypes.func.isRequired,
  toggleFormVisibility: PropTypes.func.isRequired
};

export default ClientAdd;
