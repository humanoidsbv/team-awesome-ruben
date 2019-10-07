import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TimeEntryAdd.module.css';

const TimeEntryAdd = ({ addFormData, clients }) => {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [client, setClient] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:30');

  const [validity, setValidity] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(true);

  const formRef = useRef(null);

  const handleToggle = () => setIsFormVisible(!isFormVisible);

  const handleBlur = event => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    addFormData({
      client,
      id: Math.random(),
      startTimestamp: new Date(`${date} ${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date} ${endTime}`).toISOString()
    });

    setClient('');
    setActivity('');
  };

  return (
    <div className={`${styles.container}`}>
      <form
        className={`${styles.form} ${isFormVisible && styles.formVisible}`}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <button
          className={styles.closeButton}
          onClick={handleToggle}
          type="button"
        >
          <IconPlus />
        </button>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="client"
        >
          <p className={styles.labelText}>CLIENT</p>
          <select
            className={`${styles.input} ${
              validity.client === false ? styles.invalidInput : ''
            }`}
            name="client"
            onBlur={handleBlur}
            onChange={({ target }) => setClient(target.value)}
            value={client}
            required
          >
            <option value="" disabled>
              -- Select a client --
            </option>
            {clients.map(_client => {
              return (
                <React.Fragment key={_client.id}>
                  <option value={_client.companyName}>
                    {_client.companyName}
                  </option>
                </React.Fragment>
              );
            })}
          </select>
        </label>

        <label
          className={`${styles.label} ${styles.labelLarge}`}
          htmlFor="activity"
        >
          <p className={styles.labelText}>ACTIVITY</p>
          <input
            className={`${styles.input} ${
              validity.activity === false ? styles.invalidInput : ''
            }`}
            maxLength="30"
            minLength="2"
            name="activity"
            onBlur={handleBlur}
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
            name="date"
            onChange={({ target }) => setDate(target.value)}
            required
            type="date"
            value={date}
          />
        </label>

        <label
          className={`${styles.label} ${styles.labelSmall} ${styles.labelHalfWidth}`}
          htmlFor="startTime"
        >
          <p className={styles.labelText}>FROM</p>
          <input
            className={`${styles.input} ${styles.timeStamp}`}
            name="startTime"
            onChange={({ target }) => setStartTime(target.value)}
            type="time"
            value={startTime}
          />
        </label>
        <label
          className={`${styles.label} ${styles.labelSmall} ${styles.labelHalfWidth}`}
          htmlFor="endTime"
        >
          <p className={styles.labelText}>TO</p>
          <input
            className={`${styles.input} ${styles.timeStamp}`}
            name="endTime"
            onChange={({ target }) => setEndTime(target.value)}
            type="time"
            value={endTime}
          />
        </label>
        <button
          className={styles.addButton}
          disabled={validity.form !== true}
          type="submit"
        >
          Add
        </button>
      </form>

      {!isFormVisible && (
        <button
          className={styles.showForm}
          type="button"
          onClick={handleToggle}
        >
          <IconPlus className={styles.showFormIcon} />
          New time entry
        </button>
      )}
    </div>
  );
};

TimeEntryAdd.propTypes = {
  addFormData: PropTypes.func.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string
    })
  )
};

TimeEntryAdd.defaultProps = {
  clients: []
};

export default TimeEntryAdd;
