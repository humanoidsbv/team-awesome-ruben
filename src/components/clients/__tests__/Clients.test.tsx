import * as React from 'react';
import { shallow } from 'enzyme';

import Clients from '../Clients';

const mockedClientsData = {
  branch: '',
  branchAddress: '',
  companyName: '',
  id: 0,
  locality: '',
  postalCode: ''
};

it('matches component output with expected output', () => {
  const clientAdd = shallow(
    <Clients
      addClient={() => {}}
      clients={[mockedClientsData]}
      fetchClients={() => {}}
    />
  );
  expect(clientAdd).toMatchSnapshot();
});
