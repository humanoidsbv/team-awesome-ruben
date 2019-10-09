import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  textAlign: 'center',
  marginTop: '100px',
  marginBottom: 'auto'
};

const Center = ({ children }) => <div style={styles}>{children}</div>;

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Center;
