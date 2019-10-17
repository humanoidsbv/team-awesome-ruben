import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntry from '../TimeEntry';

const ClientMockedData = {
  branch: '123',
  branchAddress: '123',
  companyName: '123',
  id: 123,
  locality: '123',
  postalCode: '123'
};

it('matches current time entry output with expected output', () => {
  const timeEntry = shallow(
    <TimeEntry
      client={ClientMockedData}
      deleteEntry={(a: number) => null}
      id={123}
      startTimestamp="2019-10-16T09:00:00.000Z"
      stopTimestamp="2019-10-16T17:30:00.000Z"
    />
  );
  expect(timeEntry).toMatchSnapshot();
});
