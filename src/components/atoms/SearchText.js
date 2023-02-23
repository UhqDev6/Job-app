import React from 'react';

function SearchText() {
  return (
    <div>
      <input
        type="text"
        value=""
        className="bg-white appearance-none border-2 border-slate-100 text-xs dark:border-none dark:text-slate-400 dark:bg-slate-600 rounded-lg w-56 py-2  h-12 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-400"
        placeholder="Search by job title, location"
        onChange=""
      />
    </div>
  );
}

export default SearchText;
