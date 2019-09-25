const apiUrl = 'http://localhost:3000/time-entries';

export const addTimeEntry = item => {
  const response = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  return response.status;
};

export const deleteTimeEntry = async timeEntryId => {
  const response = await fetch(`${apiUrl}/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.status;
};

export const fetchTimeEntries = async () => {
  const response = await fetch(`${apiUrl}?_sort=startTimestamp&_order=desc`);
  return response.json();
};
