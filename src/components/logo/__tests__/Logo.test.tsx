import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

it('matches output with  snapshot', () => {
  const logo = shallow(<Logo />);
  expect(logo).toMatchSnapshot();
});
