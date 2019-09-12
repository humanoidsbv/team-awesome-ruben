import React from 'react';
import styles from './TimeEntryAdd.module.css';

/*Work In Progress!*/
const TimeEntryAdd = () => (
  <div className={styles.TimeEntryAdd}>
    <button className={styles.closeButton}>x</button>
    <form className={styles.form}>
      <label className={styles.label}>EMPLOYER</label>
      <select className={styles.select}>
        <option value="">Port of Rotterdam</option>
        <option value="">Hike One</option>
      </select>

      <label className={styles.label}>ACTIVITY</label>
      <select className={styles.select}>
        <option value="">Design</option>
      </select>

      <label className={styles.label}>DATE</label>
      <select className={styles.select}>
        <option value="">29-07-2018</option>
      </select>
    </form>
  </div>
);

export default TimeEntryAdd;
