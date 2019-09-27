import React from 'react';

import styles from './TeamMemberAdd.module.css';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';

const TeamMemberAdd = () => {
  return (
    <div>
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
            <p className={styles.labelText}>First Name</p>
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
            <p className={styles.labelText}>Last Name</p>
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
            <p className={styles.labelText}>E-mail Adress</p>
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
            <p className={styles.labelText}>Bio</p>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              id="bio"
              minLength="2"
              name="bio"
              required
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
            <p className={styles.labelText}>ZIP code</p>
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
            <p className={styles.labelText}>City</p>
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
