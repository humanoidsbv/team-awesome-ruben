import React from 'react';
import styles from './TimeEntryAdd.module.css';

const TimeEntryAdd = () => (
  <div className={styles.TimeEntryNew}>
    <button className={styles.closeButton}>x</button>
    <form className={styles.form}>
      <label className={styles.label}>EMPLOYER</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Port of Rotterdam"
      ></input>

      <label className={styles.label}>ACTIVITY</label>
      <input className={styles.input} type="text" placeholder="Design"></input>

      <label className={styles.label}>DATE</label>
      <input
        className={styles.input}
        type="text"
        placeholder="29-07-2018"
      ></input>
    </form>
  </div>
);

export default TimeEntryAdd;
