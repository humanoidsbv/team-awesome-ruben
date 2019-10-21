import * as React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

it('matches output with  snapshot', () => {
  const layout = ({ children }: LayoutProps) =>
    shallow(<Layout children={<React.Fragment>{children}</React.Fragment>} />);
  expect(layout).toMatchSnapshot();
});
