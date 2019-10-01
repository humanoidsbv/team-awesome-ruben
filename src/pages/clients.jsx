import React from 'react';

import Clients from '../components/client/';
import Header from '../components/header/';
import Layout from '../components/Layout';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <Clients />
    </Layout>
  </React.Fragment>
);
