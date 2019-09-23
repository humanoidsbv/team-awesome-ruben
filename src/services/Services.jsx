export const saveTimeEntry = newTimeEntry => {
  fetch('http://localhost:3000/time-entries', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
};

export const fetchTimeEntries = async () => {
  const response = await fetch(
    'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
  );
  return response.json();
};

export const deleteTimeEntry = selectedTimeEntry => {
  fetch(`http://localhost:3000/time-entries/${selectedTimeEntry}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: '0' })
  });
};
