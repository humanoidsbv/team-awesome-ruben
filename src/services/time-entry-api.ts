const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-ruben-api'
}/time-entries`;

export const addTimeEntry = async (item: {}): Promise<{}> =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteTimeEntry = async (timeEntryId: number): Promise<{}> =>
  fetch(`${apiUrl}/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchTimeEntries = async (): Promise<{}> => {
  const response = await fetch(`${apiUrl}?_sort=startTimestamp&_order=desc`);
  return response.json();
};
