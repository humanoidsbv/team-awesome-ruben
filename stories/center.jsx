import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '70%',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Center;
