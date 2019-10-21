import * as React from 'react';
import { shallow } from 'enzyme';

import Client from '../Client';

const mockedClientsData = {
  branch: '',
  branchAddress: '',
  companyName: '',
  id: 0,
  locality: '',
  postalCode: ''
};

it('matches output with  snapshot', () => {
  const client = shallow(<Client client={mockedClientsData} />);
  expect(client).toMatchSnapshot();
});
