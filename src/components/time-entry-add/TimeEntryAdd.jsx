import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TimeEntryAdd.module.css';

const TimeEntryAdd = ({ addFormData }) => {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [client, setClient] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:30');

  const [formSent, setFormSent] = useState(true);
  const formRef = useRef(null);

  const handleValidation = () => {
    setFormSent(formRef.current.checkValidity());
  };

  function handleSubmit(event) {
    event.preventDefault();

    setClient('');
    setActivity('');

    addFormData({
      client,
      id: Math.random(),
      startTimestamp: new Date(`${date} ${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date} ${endTime}`).toISOString()
    });
  }

  return (
    <div className={`${styles.container}`}>
      <form
        className={`${styles.form} ${formSent ? '' : styles.formInvalid}`}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <button type="button" className={styles.closeButton}>
          <IconPlus />
        </button>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="client"
        >
          <p className={styles.labelText}>CLIENT</p>
          <input
            className={styles.input}
            id="client"
            maxLength="35"
            minLength="2"
            onChange={({ target }) => setClient(target.value)}
            required
            value={client}
          />
        </label>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="activity"
        >
          <p className={styles.labelText}>ACTIVITY</p>
          <input
            className={styles.input}
            id="activity"
            maxLength="35"
            minLength="2"
            onChange={({ target }) => setActivity(target.value)}
            required
            value={activity}
          />
        </label>
        <label
          className={`${styles.label} ${styles.labelMedium} ${styles.date}`}
          htmlFor="date"
        >
          <p className={styles.labelText}>DATE</p>
          <input
            className={styles.input}
            id="date"
            onChange={({ target }) => setDate(target.value)}
            type="date"
            value={date}
            required
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
            className={`${styles.input} ${styles.time}`}
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
            className={`${styles.input} ${styles.time}`}
            id="endTime"
            onChange={({ target }) => setEndTime(target.value)}
            type="time"
            value={endTime}
          />
        </label>
        <button
          className={styles.addButton}
          onClick={handleValidation}
          type="submit"
        >
          <p>Add</p>
        </button>
      </form>
      <button className={styles.showForm} type="button">
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
