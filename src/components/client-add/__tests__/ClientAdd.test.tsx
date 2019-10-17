import * as React from 'react';
import { shallow } from 'enzyme';

import ClientAdd from '../ClientAdd';

it('matches component output with expected output', () => {
  const clientAdd = shallow(
    <ClientAdd addClient={() => {}} toggleFormVisibility={() => {}} />
  );
  expect(clientAdd).toMatchSnapshot();
});
