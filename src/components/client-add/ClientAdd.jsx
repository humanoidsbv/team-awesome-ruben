import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/';
import Input from '../../../shared/components/input/';
import Label from '../../../shared/components/label/';
import styles from './ClientAdd.module.css';

const ClientAdd = ({ addClient, toggleFormVisibility }) => {
  const [branch, setBranch] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [validity, setValidity] = useState({});

  const formRef = useRef(null);

  const handleBlur = event => {
    // Descontruct a dynamic value from an object and keep the remainder
    if (event.target.value === '') {
      const { [event.target.name]: inputValidity, ...restValidity } = validity;
      setValidity({ restValidity, form: formRef.current.checkValidity() });
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
    setBranchAddress('');
    setCompanyName('');
    setLocality('');
    setPostalCode('');
    toggleFormVisibility();
  };

  const handleSubmit = event => {
    event.preventDefault();

    addClient({
      branch,
      branchAddress,
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
          <Label htmlFor="companyName">
            Client
            <Input
              isValid={validity.companyName}
              maxLength="30"
              minLength="2"
              name="companyName"
              onBlur={handleBlur}
              onChange={({ target }) => setCompanyName(target.value)}
              required
            />
          </Label>
          <Label>
            <span>Branch</span>
            <Input
              isValid={validity.branch}
              maxLength="30"
              minLength="2"
              name="branch"
              onBlur={handleBlur}
              onChange={({ target }) => setBranch(target.value)}
              required
            />
          </Label>
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.inputContainer}>
          <Label>
            Branch address
            <Input
              isValid={validity.branchAddress}
              maxLength="30"
              minLength="2"
              name="branchAddress"
              onBlur={handleBlur}
              onChange={({ target }) => setBranchAddress(target.value)}
              required
            />
          </Label>
          <Label halfWidth>
            Postal code
            <Input
              isValid={validity.postalCode}
              maxLength="30"
              minLength="2"
              name="postalCode"
              onBlur={handleBlur}
              onChange={({ target }) => setPostalCode(target.value)}
              required
            />
          </Label>
          <Label halfWidth>
            Location
            <Input
              isValid={validity.locality}
              maxLength="30"
              minLength="2"
              name="locality"
              onBlur={handleBlur}
              onChange={({ target }) => setLocality(target.value)}
              required
            />
          </Label>
        </div>
      </form>
      <div className={styles.header}>
        <span className={styles.heading}>Add New Client</span>
        <div className={styles.fullWidth}>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button disabled={validity.form !== true} onClick={handleSubmit}>
            Save
          </Button>
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
