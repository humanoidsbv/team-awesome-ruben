import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

it('matches component output with expected output', () => {
  const logo = shallow(<Logo />);
  expect(logo).toMatchSnapshot();
});
