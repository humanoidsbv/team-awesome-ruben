import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntryHeader from '../TimeEntryHeader';

it('matches output with  snapshot', () => {
  const timeEntryHeader = shallow(
    <TimeEntryHeader
      startTimestamp={'2019-09-23T07:00:00.000Z'}
      stopTimestamp={'2019-09-23T15:30:00.000Z'}
    />
  );
  expect(timeEntryHeader).toMatchSnapshot();
});
