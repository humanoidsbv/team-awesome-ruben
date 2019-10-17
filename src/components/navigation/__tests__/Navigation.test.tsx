import * as React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../Navigation';

it('matches component output with expected output', () => {
  const navigation = shallow(<Navigation isMenuVisible={false} />);
  expect(navigation).toMatchSnapshot();
});
