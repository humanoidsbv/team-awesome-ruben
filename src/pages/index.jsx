import React from 'react';

import Header from '../components/header';
import Layout from '../components/Layout';
import TimeEntries from '../components/time-entries';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <TimeEntries />
    </Layout>
  </React.Fragment>
);
