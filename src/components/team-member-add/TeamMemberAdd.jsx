import React from 'react';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const TeamMemberAdd = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.heading}>Add new team member</span>
        <button type="button" className={styles.cancelButton}>
          Cancel
        </button>
        <button type="button" className={styles.addMemberButton}>
          Save
        </button>
      </div>
      <div className={styles.formTab}>
        <span>Personal Details</span>
      </div>
      <form className={styles.form}>
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
              className={styles.input}
              id="firstName"
              maxLength="30"
              minLength="2"
              name="firstName"
              required
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="lastName"
          >
            <span className={styles.labelText}>Last Name</span>
            <input
              className={styles.input}
              id="lastName"
              maxLength="30"
              minLength="2"
              name="lastName"
              required
            />
          </label>
          <label className={`${styles.label}`} htmlFor="e-mail">
            <span className={styles.labelText}>E-mail Adress</span>
            <input
              className={styles.input}
              id="e-mail"
              maxLength="30"
              minLength="2"
              name="e-mail"
              required
            />
          </label>
          <label className={`${styles.label}`} htmlFor="bio">
            <span className={styles.labelText}>Bio</span>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              id="bio"
              name="bio"
            />
          </label>
        </div>
        <span className={styles.verticalLine} />
        <div className={styles.inputContainer}>
          <label className={`${styles.label}`} htmlFor="Adress">
            <span className={styles.labelText}>Adress</span>
            <input
              className={styles.input}
              id="Adress"
              maxLength="30"
              minLength="2"
              name="Adress"
              required
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="zip-code"
          >
            <span className={styles.labelText}>ZIP code</span>
            <input
              className={styles.input}
              id="zip-code"
              maxLength="30"
              minLength="2"
              name="zip-code"
              required
            />
          </label>
          <label
            className={`${styles.label} ${styles.labelHalfWidth}`}
            htmlFor="city"
          >
            <span className={styles.labelText}>City</span>
            <input
              className={styles.input}
              id="city"
              maxLength="30"
              minLength="2"
              name="city"
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default TeamMemberAdd;
