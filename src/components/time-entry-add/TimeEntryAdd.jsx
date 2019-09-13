import React from 'react';

import styles from './TimeEntryAdd.module.css';

const TimeEntryAdd = () => (
  <div className={styles.TimeEntryAdd}>
    <button type="button" className={styles.closeButton}>
      x
    </button>
    <form className={styles.form}>
      <label className={styles.label} htmlFor="employer">
        <p className={styles.labelText}>EMPLOYER</p>
        <select className={styles.select} id="employer">
          <option value="">Port of Rotterdam</option>
          <option value="">Hike One</option>
        </select>
      </label>

      <label className={styles.label} htmlFor="activity">
        <p className={styles.labelText}>ACTIVITY</p>
        <select className={styles.select} id="activity">
          <option value="">Design</option>
        </select>
      </label>

      <label className={styles.label} htmlFor="date">
        <p className={styles.labelText}>DATE</p>
        <select className={styles.select} id="date">
          <option value="">29-07-2018</option>
        </select>
      </label>

      <label
        className={`${styles.label} ${styles.labelHalfWidth}`}
        htmlFor="from"
      >
        <p className={styles.labelText}>FROM</p>
        <select className={styles.select} id="from">
          <option value="">09:00</option>
        </select>
      </label>

      <label
        className={`${styles.label} ${styles.labelHalfWidth}`}
        htmlFor="to"
      >
        <p className={styles.labelText}>TO</p>
        <select className={styles.select} id="to">
          <option value="">17:00</option>
        </select>
      </label>
    </form>
  </div>
);

export default TimeEntryAdd;
