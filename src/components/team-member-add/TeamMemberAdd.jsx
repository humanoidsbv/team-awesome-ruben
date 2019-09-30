import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const TeamMemberAdd = ({ addFormData }) => {
  const [bio, setBio] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [faceBook, setFacebook] = useState('');
  const [firstName, setFirstName] = useState('Antje');
  const [lastName, setLastName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [locality, setLocality] = useState('');
  const [homeAdress, setHomeAdress] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [validity, setValidity] = useState({});

  const formRef = useRef(null);

  const handleBlur = event => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addFormData({
      id: Math.random(),
      firstName,
      lastName,
      bio,
      homeAdress,
      zipCode,
      locality,
      role: '-',
      startingDate: '-',
      employeeNumber: '-',
      currentClient: '-'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.heading}>Add new team member</span>
        <button type="button" className={styles.cancelButton}>
          Cancel
        </button>
        <button
          className={styles.addMemberButton}
          //   disabled={validity.form !== true}
          type="button"
          onClick={handleSubmit}
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
            <span className={styles.labelText}>First Name</span>
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
            <span className={styles.labelText}>Last Name</span>
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
        <span className={styles.verticalLine} />
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
            htmlFor="zipCode"
          >
            <span className={styles.labelText}>ZIP code</span>
            <input
              className={`${styles.input} 
              ${validity.zipCode === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="zipCode"
              onBlur={handleBlur}
              onChange={({ target }) => setZipCode(target.value)}
              required
              value={zipCode}
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="locality"
          >
            <span className={styles.labelText}>City</span>
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
        </div>
      </form>
    </div>
  );
};

TeamMemberAdd.propTypes = {
  addFormData: PropTypes.func.isRequired
};

export default TeamMemberAdd;
