import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntry from '../TimeEntry';

it('converts basic button using shallow', () => {
  const timeEntry = shallow(
    <TimeEntry
      id={123}
      client={{
        branch: '123',
        branchAdress: '123',
        companyName: '123',
        id: 123,
        locality: '123',
        postalCode: '123'
      }}
      deleteEntry={(a: number) => null}
      startTimestamp="2019-10-16T09:00:00.000Z"
      stopTimestamp="2019-10-16T17:30:00.000Z"
    />
  );
  expect(timeEntry).toMatchSnapshot();
});
