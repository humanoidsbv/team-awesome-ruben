import React, { useState, useRef } from 'react';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

import { ValidityState } from '../../../shared/types';

interface TeamMemberProps {
  //* TODO: Add data to addFormData and rename for team members
  addFormData: ({}) => void;
  handleFormVisible: () => void;
}

const TeamMemberAdd = ({
  addFormData,
  handleFormVisible
}: TeamMemberProps): React.ReactElement => {
  const [bio, setBio] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [facebook, setFacebook] = useState('');
  const [firstName, setFirstName] = useState('');
  const [homeaddress, setHomeaddress] = useState('');
  const [lastName, setLastName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [validity, setValidity] = useState<ValidityState>({});

  const formRef = useRef(null);

  const handleBlur = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleCloseForm = (): void => {
    handleFormVisible();
    setBio('');
    setEmailaddress('');
    setFacebook('');
    setFirstName('');
    setHomeaddress('');
    setLastName('');
    setLinkedIn('');
    setLocality('');
    setPostalCode('');
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    addFormData({
      bio,
      currentClient: '-',
      employeeNumber: '-',
      firstName,
      homeaddress,
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
          onClick={() => handleSubmit}
          type="button"
        >
          Save
        </button>
      </div>
      <div className={styles.formTab}>
        <span>Personal Details</span>
      </div>
      <form className={styles.form} onSubmit={() => handleSubmit} ref={formRef}>
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
              className={`${styles.input} ${validity.firstName === false &&
                styles.invalidInput}`}
              maxLength={30}
              minLength={2}
              name="firstName"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setFirstName(target.value)
              }
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
              className={`${styles.input} ${validity.lastName === false &&
                styles.invalidInput}`}
              maxLength={30}
              minLength={2}
              name="lastName"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setLastName(target.value)
              }
              required
              value={lastName}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="emailaddress">
            <span className={styles.labelText}>Email address</span>
            <input
              className={`${styles.input} 
              ${validity.emailaddress === false ? styles.invalidInput : ''}`}
              maxLength={30}
              minLength={2}
              name="emailaddress"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setEmailaddress(target.value)
              }
              required
              value={emailaddress}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="bio">
            <span className={styles.labelText}>Bio</span>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              name="bio"
              onBlur={handleBlur}
              onChange={({ target }): void | string => setBio(target.value)}
              value={bio}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={`${styles.label}`} htmlFor="homeaddress">
            <span className={styles.labelText}>address</span>
            <input
              className={`${styles.input} 
              ${validity.homeaddress === false ? styles.invalidInput : ''}`}
              maxLength={30}
              minLength={2}
              name="homeaddress"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setHomeaddress(target.value)
              }
              required
              value={homeaddress}
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
              maxLength={30}
              minLength={2}
              name="postalCode"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setPostalCode(target.value)
              }
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
              maxLength={30}
              minLength={2}
              name="locality"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setLocality(target.value)
              }
              required
              value={locality}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="socialProfiles">
            <span className={styles.labelText}>Social profiles</span>
            <input
              className={`${styles.input} ${styles.facebook}
              ${validity.facebook === false ? styles.invalidInput : ''}`}
              maxLength={30}
              minLength={2}
              name="faceBook"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setFacebook(target.value)
              }
              value={facebook}
            />
            <input
              className={`${styles.input}
              ${validity.linkedIn === false ? styles.invalidInput : ''}`}
              maxLength={30}
              minLength={2}
              name="linkedIn"
              onBlur={handleBlur}
              onChange={({
                target
              }: React.ChangeEvent<HTMLInputElement>): void | string =>
                setLinkedIn(target.value)
              }
              required
              value={linkedIn}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default TeamMemberAdd;
