import React from 'react';
import PropTypes from 'prop-types';

function Title({ className = '', children }) {
  return (
    <h1 className={`${className}`}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
