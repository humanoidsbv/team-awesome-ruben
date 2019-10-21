import * as React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../Navigation';

it('matches output with  snapshot', () => {
  const navigation = shallow(<Navigation isMenuVisible={false} />);
  expect(navigation).toMatchSnapshot();
});
