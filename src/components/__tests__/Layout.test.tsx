import * as React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

it('matches output with  snapshot', () => {
  const layout = shallow(
    <Layout children={<React.Fragment></React.Fragment>} />
  );
  expect(layout).toMatchSnapshot();
});
