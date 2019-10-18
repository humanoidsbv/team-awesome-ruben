import * as React from 'react';
import { shallow } from 'enzyme';

import ClientAdd from '../ClientAdd';

it('matches output with  snapshot', () => {
  const clientAdd = shallow(
    <ClientAdd addClient={() => {}} toggleFormVisibility={() => {}} />
  );
  expect(clientAdd).toMatchSnapshot();
});

it('keeps track of wether the form is open', () => {
  const toggleFormVisibilitySpy = jest.fn();
  const clientAdd = shallow(
    <ClientAdd
      addClient={() => {}}
      toggleFormVisibility={toggleFormVisibilitySpy}
    />
  );
  expect(toggleFormVisibilitySpy).not.toHaveBeenCalled();
});
