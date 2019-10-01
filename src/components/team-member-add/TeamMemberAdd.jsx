import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const TeamMemberAdd = ({ addFormData, handleFormActive }) => {
  const [bio, setBio] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [facebook, setFacebook] = useState('');
  const [firstName, setFirstName] = useState('');
  const [homeAdress, setHomeAdress] = useState('');
  const [lastName, setLastName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [locality, setLocality] = useState('');
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

  const handleCloseForm = () => {
    handleFormActive();
    setBio('');
    setEmailAdress('');
    setFacebook('');
    setFirstName('');
    setHomeAdress('');
    setLastName('');
    setLinkedIn('');
    setLocality('');
    setZipCode('');
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
      zipCode
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
          <label className={`${styles.label}`} htmlFor="socialProfiles">
            <span className={styles.labelText}>Social Profiles</span>
            <input
              className={`${styles.input} ${styles.facebook}
              ${validity.facebook === false ? styles.invalidInput : ''}`}
              maxLength="30"
              minLength="2"
              name="faceBook"
              onBlur={handleBlur}
              onChange={({ target }) => setFacebook(target.value)}
              required
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
  handleFormActive: PropTypes.func.isRequired
};

export default TeamMemberAdd;
