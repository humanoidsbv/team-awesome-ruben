import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Clients from '../Clients';
import ClientsAdd from '../../team-member-add/';

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

  expect(clients.find('[data-test="addMember"]').length).toBe(1);
  expect(clients.find('[data-test="ClientAdd"]').length).toBe(0);

  clients.find('[data-test="addMember"]').simulate('click');

  expect(clients.find('[data-test="ClientAdd"]').length).toBe(1);
});
