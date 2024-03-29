const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-ruben-api'
}/team-members`;

export const addTeamMember = (item: {}): Promise<{}> =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteTeamMember = async (teamMemberId: number): Promise<{}> =>
  fetch(`${apiUrl}/${teamMemberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchTeamMembers = async (): Promise<{}> => {
  const response = await fetch(`${apiUrl}?_sort=firstName&_order=desc`);
  return response.json();
};
