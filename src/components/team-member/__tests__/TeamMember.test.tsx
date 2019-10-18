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

it('matches output with  snapshot', () => {
  const teamMember = shallow(<TeamMember teamMember={teamMemberMockeddata} />);
  expect(teamMember).toMatchSnapshot();
});
