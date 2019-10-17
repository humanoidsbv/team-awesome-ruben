import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMember from '../TeamMember';

const teamMemberMockeddata = {
  currentClient: '',
  employeeNumber: '',
  firstName: '',
  id: 0,
  lastName: '',
  role: '',
  startingDate: ''
};

it('matches component output with expected output', () => {
  const teamMember = shallow(<TeamMember teamMember={teamMemberMockeddata} />);
  expect(teamMember).toMatchSnapshot();
});
