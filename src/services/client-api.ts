const apiUrl = `${
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-ruben-api'
}/clients`;

export const addClient = async (item: {}): Promise<{}> =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteClient = async (clientId: number): Promise<{}> =>
  fetch(`${apiUrl}/${clientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchClients = async (): Promise<{}> => {
  const response = await fetch(`${apiUrl}?_sort=client&_order=desc`);
  return response.json();
};
