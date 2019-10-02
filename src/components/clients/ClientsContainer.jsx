import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addClientRequest,
  deleteClientRequest,
  fetchClientsRequest,
  clientsItemsSelector
} from '../../redux/clients';
import Clients from './Clients';

const ClientsContainer = props => <Clients {...props} />;

const mapStateToProps = state => ({
  clients: clientsItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addClient: addClientRequest,
      deleteClient: deleteClientRequest,
      fetchClients: fetchClientsRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsContainer);
