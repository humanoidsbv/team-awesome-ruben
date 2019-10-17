import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMemberAdd from '../TeamMemberAdd';

it('matches component output with expected output', () => {
  const teamMemberAdd = shallow(
    <TeamMemberAdd addFormData={() => {}} handleFormVisible={() => {}} />
  );
  expect(teamMemberAdd).toMatchSnapshot();
});
