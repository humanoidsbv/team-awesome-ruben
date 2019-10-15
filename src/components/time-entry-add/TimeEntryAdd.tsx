import React, { useState, useRef } from 'react';

import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TimeEntryAdd.module.css';

import { ValidityState } from '../../../shared/types';

const TimeEntryAdd = ({ addFormData, clients }): React.ReactElement => {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [client, setClient] = useState('');
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:30');

  const [validity, setValidity] = useState<ValidityState>({});
  const [isFormVisible, setIsFormVisible] = useState(true);

  const formRef = useRef(null);

  const handleToggle = (): void => setIsFormVisible(!isFormVisible);

  const handleBlur = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleSubmit = (event): void => {
    event.preventDefault();

    addFormData({
      client: Number(client),
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
            onChange={({
              target
            }: React.ChangeEvent<HTMLSelectElement>): void =>
              setClient(target.value)
            }
            value={client}
            required
          >
            <option value="" disabled>
              -- Select a client --
            </option>
            {clients.map(
              ({ companyName, id }: { companyName: string; id: number }) => (
                <option value={id} key={id}>
                  {companyName}
                </option>
              )
            )}
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
            maxLength={30}
            minLength={2}
            name="activity"
            onBlur={handleBlur}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
              setActivity(target.value)
            }
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
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
              setDate(target.value)
            }
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
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
              setStartTime(target.value)
            }
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
            onChange={({
              target
            }: React.ChangeEvent<HTMLInputElement>): void | string =>
              setEndTime(target.value)
            }
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

export default TimeEntryAdd;
