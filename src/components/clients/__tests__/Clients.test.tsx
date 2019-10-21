import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Clients from '../Clients';
import ClientAdd from '../../client-add';

const mockedClientsData = {
  branch: '',
  branchAddress: '',
  companyName: '',
  id: 0,
  locality: '',
  postalCode: ''
};

it('matches output with  snapshot', () => {
  const clients = shallow(
    <Clients
      addClient={() => {}}
      clients={[mockedClientsData]}
      fetchClients={() => {}}
    />
  );
  expect(clients).toMatchSnapshot();
});

it('can open the clientAdd component', () => {
  const clients = mount(
    <Clients
      addClient={() => {}}
      clients={[mockedClientsData]}
      fetchClients={() => {}}
    />
  );

  expect(clients.find('.addMember').length).toBe(1);
  expect(clients.find(ClientAdd).length).toBe(0);

  clients.find('.addMember').simulate('click');

  expect(clients.find(ClientAdd).length).toBe(1);
});
