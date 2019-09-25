import React from 'react';

import Header from '../components/header';
import Layout from '../components/Layout';
import TimeEntriesContainer from '../components/time-entries';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <TimeEntriesContainer />
    </Layout>
  </React.Fragment>
);
