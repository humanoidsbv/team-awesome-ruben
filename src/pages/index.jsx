import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/Layout';
import TimeEntriesContainer from '../components/time-entries/TimeEntriesContainer';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <TimeEntriesContainer />
    </Layout>
  </React.Fragment>
);
