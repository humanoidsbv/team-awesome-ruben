const apiUrl = 'http://localhost:3000/clients';

export const addClient = item =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteClient = async clientId =>
  fetch(`${apiUrl}/${clientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchClients = async () => {
  const response = await fetch(`${apiUrl}?_sort=client&_order=desc`);
  return response.json();
};
