import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMemberAdd from '../TeamMemberAdd';

it('matches output with  snapshot', () => {
  const teamMemberAdd = shallow(
    <TeamMemberAdd addFormData={() => {}} handleFormVisible={() => {}} />
  );
  expect(teamMemberAdd).toMatchSnapshot();
});
