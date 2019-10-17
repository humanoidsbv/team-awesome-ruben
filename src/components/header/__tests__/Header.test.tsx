import * as React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

it('matches component output with expected output', () => {
  const header = shallow(<Header />);
  expect(header).toMatchSnapshot();
});
