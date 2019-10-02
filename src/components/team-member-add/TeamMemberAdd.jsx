import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const TeamMemberAdd = ({ addFormData, handleFormVisible }) => {
  const [bio, setBio] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [facebook, setFacebook] = useState('');
  const [firstName, setFirstName] = useState('');
  const [homeAdress, setHomeAdress] = useState('');
  const [lastName, setLastName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [validity, setValidity] = useState({});

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
    setBio('');
    setEmailAdress('');
    setFacebook('');
    setFirstName('');
    setHomeAdress('');
    setLastName('');
    setLinkedIn('');
    setLocality('');
    setPostalCode('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    addFormData({
      bio,
      currentClient: '-',
      employeeNumber: '-',
      firstName,
      homeAdress,
      id: Math.random(),
      lastName,
      locality,
      role: '-',
      startingDate: '-',
      postalCode
    });

    handleCloseForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.heading}>Add new team member</span>
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
        <span>Personal Details</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.profileImageContainer}>
          <img
            alt="Profile avatar"
            className={styles.profileImage}
            src={UserProfileImage}
          />
          <span>Edit Avatar</span>
        </div>
        <div className={styles.inputContainer}>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="firstName"
          >
            <span className={styles.labelText}>First name</span>
            <input
              className={`${styles.input} ${
                validity.firstName === false ? styles.invalidInput : ''
              }`}
              maxLength="30"
              minLength="2"
              name="firstName"
              onBlur={handleBlur}
              onChange={({ target }) => setFirstName(target.value)}
              required
              value={firstName}
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="lastName"
          >
            <span className={styles.labelText}>Last name</span>
            <input
              className={`${styles.input} ${
                validity.lastName === false ? styles.invalidInput : ''
              }`}
              maxLength="30"
              minLength="2"
              name="lastName"
              onBlur={handleBlur}
              onChange={({ target }) => setLastName(target.value)}
              required
              value={lastName}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="emailAdress">
            <span className={styles.labelText}>Email adress</span>
            <input
              className={`${styles.input} 
              ${validity.emailAdress === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="emailAdress"
              onBlur={handleBlur}
              onChange={({ target }) => setEmailAdress(target.value)}
              required
              value={emailAdress}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="bio">
            <span className={styles.labelText}>Bio</span>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              name="bio"
              onBlur={handleBlur}
              onChange={({ target }) => setBio(target.value)}
              value={bio}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={`${styles.label}`} htmlFor="homeAdress">
            <span className={styles.labelText}>Adress</span>
            <input
              className={`${styles.input} 
              ${validity.homeAdress === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="homeAdress"
              onBlur={handleBlur}
              onChange={({ target }) => setHomeAdress(target.value)}
              required
              value={homeAdress}
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="postalCode"
          >
            <span className={styles.labelText}>Postal code</span>
            <input
              className={`${styles.input} 
              ${validity.postalCode === false ? styles.invalidInput : ''}`}
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
            <span className={styles.labelText}>Place of birth</span>
            <input
              className={`${styles.input} 
              ${validity.locality === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="locality"
              onBlur={handleBlur}
              onChange={({ target }) => setLocality(target.value)}
              required
              value={locality}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="socialProfiles">
            <span className={styles.labelText}>Social profiles</span>
            <input
              className={`${styles.input} ${styles.facebook}
              ${validity.facebook === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="faceBook"
              onBlur={handleBlur}
              onChange={({ target }) => setFacebook(target.value)}
              value={facebook}
            />
            <input
              className={`${styles.input}
              ${validity.linkedIn === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="linkedIn"
              onBlur={handleBlur}
              onChange={({ target }) => setLinkedIn(target.value)}
              required
              value={linkedIn}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

TeamMemberAdd.propTypes = {
  addFormData: PropTypes.func.isRequired,
  handleFormVisible: PropTypes.func.isRequired
};

export default TeamMemberAdd;
