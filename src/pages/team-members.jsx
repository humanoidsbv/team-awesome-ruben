import React from 'react';

import Header from '../components/header/';
import Layout from '../components/Layout';
import TeamMembers from '../components/team-members/';

export default () => (
  <React.Fragment>
    <Header />
    <Layout>
      <TeamMembers />
    </Layout>
  </React.Fragment>
);
