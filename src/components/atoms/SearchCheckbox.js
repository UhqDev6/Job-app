import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchCheckbox(props) {
  const {
    search,
  } = props;
  return (
    <div>
      <input
        type="checkbox"
        value={search}
        className="w-4 h-4 cursor-pointer"
        placeholder="Search"
      />
    </div>
  );
}

SearchCheckbox.propTypes = {
  search: PropTypes.string,
};

SearchCheckbox.defaultProps = {
  search: '',
};

export default SearchCheckbox;
