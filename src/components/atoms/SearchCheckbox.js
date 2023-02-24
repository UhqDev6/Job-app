import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchCheckbox(props) {
  const {
    search,
    searchChange,
  } = props;
  return (
    <div>
      <input
        type="checkbox"
        value={search}
        className="w-4 h-4 cursor-pointer"
        placeholder="Search"
        onChange={(event) => {
          searchChange(event.target.checked);
        }}
      />
    </div>
  );
}

SearchCheckbox.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};

export default SearchCheckbox;
