const apiUrl = 'http://localhost:3000/time-entries';

export const addTimeEntry = item =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteTimeEntry = async timeEntryId =>
  fetch(`${apiUrl}/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchTimeEntries = async () => {
  const response = await fetch(`${apiUrl}?_sort=startTimestamp&_order=desc`);
  return response.json();
};
