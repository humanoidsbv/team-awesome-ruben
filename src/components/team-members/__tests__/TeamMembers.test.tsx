import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMembers from '../TeamMembers';

const mockedTeamMembersData = {
  currentClient: '',
  employeeNumber: '',
  firstName: '',
  id: 0,
  lastName: '',
  role: '',
  startingDate: ''
};

it('matches output with  snapshot', () => {
  const teamMembers = shallow(
    <TeamMembers
      addTeamMember={() => {}}
      fetchTeamMembers={() => {}}
      orderToggle={false}
      sortTeamMembersByField={() => {}}
      sortTeamMembersOrder={() => {}}
      teamMembers={[mockedTeamMembersData]}
    />
  );
  expect(teamMembers).toMatchSnapshot();
});

// addFormData={() => {}} handleFormVisible={() => {}}
