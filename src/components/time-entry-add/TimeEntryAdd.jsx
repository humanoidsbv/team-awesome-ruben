import React from 'react';

import styles from './TimeEntryAdd.module.css';

import IconPlus from '../../assets/icons/icon-plus.svg';

/* 
className={`${styles.container} ${isAddEntryVisible ? styles.AddEntryVisible : ''}`}
*/

const TimeEntryAdd = () => (
  <div className={`${styles.container}`}>
    <form className={styles.form}>
      <button type="button" className={styles.closeButton}>
        <IconPlus />
      </button>

      <label
        className={`${styles.label} ${styles.labelLarge}`}
        htmlFor="client"
      >
        <p className={styles.labelText}>CLIENT</p>
        <select className={styles.select} id="client">
          <option value="">Port of Rotterdam</option>
          <option value="">Hike One</option>
        </select>
      </label>

      <label
        className={`${styles.label} ${styles.labelLarge}`}
        htmlFor="activity"
      >
        <p className={styles.labelText}>ACTIVITY</p>
        <select className={styles.select} id="activity">
          <option value="">Design</option>
        </select>
      </label>
      <label
        className={`${styles.label} ${styles.labelMedium} ${styles.date}`}
        htmlFor="date"
      >
        <p className={styles.labelText}>DATE</p>
        <input
          type="date"
          className={styles.select}
          id="date"
          defaultValue="2018-07-29"
        ></input>
      </label>

      <label
        className={`
          ${styles.label}
          ${styles.labelSmall} 
          ${styles.labelHalfWidth}
        `}
        htmlFor="from"
      >
        <p className={styles.labelText}>FROM</p>
        <input
          type="time"
          defaultValue="09:00"
          className={`${styles.select} ${styles.time}`}
          id="from"
        />
      </label>
      <label
        className={`
          ${styles.label}
          ${styles.labelSmall} 
          ${styles.labelHalfWidth}
        `}
        htmlFor="to"
      >
        <p className={styles.labelText}>TO</p>
        <input
          type="time"
          defaultValue="17:00"
          className={`${styles.select} ${styles.time}`}
          id="to"
        />
      </label>
      <button className={styles.addButton}>
        <p>Add</p>
      </button>
    </form>
    <button className={styles.showForm}>
      <IconPlus className={styles.showFormIcon} />
      <p>New time entry</p>
    </button>
  </div>
);

export default TimeEntryAdd;
