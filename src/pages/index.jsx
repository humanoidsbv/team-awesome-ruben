import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/Layout';
import TimeEntries from '../components/time-entries/TimeEntries';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <TimeEntries />
    </Layout>
  </React.Fragment>
);