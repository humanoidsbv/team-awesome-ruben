const apiUrl = 'http://localhost:3000/team-members';

export const addTeamMember = item =>
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

export const deleteTeamMember = async teamMemberId =>
  fetch(`${apiUrl}/${teamMemberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const fetchTeamMembers = async () => {
  const response = await fetch(`${apiUrl}?_sort=name&_order=desc`);
  return response.json();
};