import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TimeEntryAdd.module.css';

const TimeEntryAdd = ({ addFormData }) => {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [client, setClient] = useState('');
  const [activity, setActivity] = useState('design');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:30');

  function handleSubmit(event) {
    event.preventDefault();
    addFormData({
      client: client,
      id: Math.random(),
      startTimestamp: new Date(`${date} ${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date} ${endTime}`).toISOString()
    });
  }

  return (
    <div className={`${styles.container}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="button" className={styles.closeButton}>
          <IconPlus />
        </button>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="client"
        >
          <p className={styles.labelText}>CLIENT</p>
          <select
            className={styles.select}
            id="client"
            onChange={({ target }) => setClient(target.value)}
            value={client}
            required
          >
            <option disabled value="">
              -- select an option --
            </option>

            <option value="Port of Rotterdam">Port of Rotterdam</option>
            <option value="Hike One">Hike One</option>
          </select>
        </label>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="activity"
        >
          <p className={styles.labelText}>ACTIVITY</p>
          <select
            className={styles.select}
            id="activity"
            onChange={({ target }) => setActivity(target.value)}
            value={activity}
          >
            <option value="design">Design</option>
          </select>
        </label>
        <label
          className={`${styles.label} ${styles.labelMedium} ${styles.date}`}
          htmlFor="date"
        >
          <p className={styles.labelText}>DATE</p>
          <input
            className={styles.select}
            id="date"
            onChange={({ target }) => setDate(target.value)}
            type="date"
            value={date}
          />
        </label>

        <label
          className={`
          ${styles.label}
          ${styles.labelSmall} 
          ${styles.labelHalfWidth}
        `}
          htmlFor="startTime"
        >
          <p className={styles.labelText}>FROM</p>
          <input
            className={`${styles.select} ${styles.time}`}
            id="startTime"
            onChange={({ target }) => setStartTime(target.value)}
            type="time"
            value={startTime}
          />
        </label>
        <label
          className={`
          ${styles.label}
          ${styles.labelSmall} 
          ${styles.labelHalfWidth}
        `}
          htmlFor="endTime"
        >
          <p className={styles.labelText}>TO</p>
          <input
            className={`${styles.select} ${styles.time}`}
            id="endTime"
            onChange={({ target }) => setEndTime(target.value)}
            type="time"
            value={endTime}
          />
        </label>
        <button className={styles.addButton}>
          <p>Add</p>
        </button>
      </form>
      <button className={styles.showForm} type="submit">
        <IconPlus className={styles.showFormIcon} />
        <p>New time entry</p>
      </button>
    </div>
  );
};

TimeEntryAdd.propTypes = {
  addFormData: PropTypes.func.isRequired
};

export default TimeEntryAdd;
