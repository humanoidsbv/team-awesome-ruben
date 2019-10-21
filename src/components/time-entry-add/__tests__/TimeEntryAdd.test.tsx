import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntryAdd from '../TimeEntryAdd';

const ClientMockedData = {
  branch: '123',
  branchAddress: '123',
  companyName: '123',
  id: 123,
  locality: '123',
  postalCode: '123'
};

it('matches output with  snapshot', () => {
  const timeEntryAdd = shallow(
    <TimeEntryAdd addFormData={({}) => {}} clients={[ClientMockedData]} />
  );
  expect(timeEntryAdd).toMatchSnapshot();
});
