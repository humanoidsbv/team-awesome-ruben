import * as React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

it('matches component output with expected output', () => {
  const layout = shallow(
    <Layout children={<React.Fragment></React.Fragment>} />
  );
  expect(layout).toMatchSnapshot();
});
