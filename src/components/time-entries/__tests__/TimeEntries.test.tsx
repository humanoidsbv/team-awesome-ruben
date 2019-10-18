import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntries from '../TimeEntries';

const mockedClientsData = {
  branch: '',
  branchAddress: '',
  companyName: '',
  id: 0,
  locality: '',
  postalCode: ''
};

const mockedTimeEntriesData = {
  client: mockedClientsData,
  id: 0,
  startTimestamp: '',
  stopTimestamp: ''
};

it('matches output with  snapshot', () => {
  const timeEntries = shallow(
    <TimeEntries
      addTimeEntry={() => {}}
      deleteTimeEntry={() => {}}
      fetchTimeEntries={() => {}}
      fetchClients={() => {}}
      timeEntries={[mockedTimeEntriesData]}
      clients={[mockedClientsData]}
      filterTimeEntriesByClient={() => {}}
    />
  );
  expect(timeEntries).toMatchSnapshot();
});
