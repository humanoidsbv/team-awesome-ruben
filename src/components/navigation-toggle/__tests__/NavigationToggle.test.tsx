import * as React from 'react';
import { shallow } from 'enzyme';

import NavigationToggle from '../NavigationToggle';

it('matches component output with expected output', () => {
  const navigationToggle = shallow(
    <NavigationToggle isMenuVisible={false} toggleMenu={() => {}} />
  );
  expect(navigationToggle).toMatchSnapshot();
});
