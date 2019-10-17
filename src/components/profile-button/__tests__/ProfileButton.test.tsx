import * as React from 'react';
import { shallow } from 'enzyme';

import ProfileButton from '../ProfileButton';

it('matches component output with expected output', () => {
  const profileButton = shallow(<ProfileButton />);
  expect(profileButton).toMatchSnapshot();
});
