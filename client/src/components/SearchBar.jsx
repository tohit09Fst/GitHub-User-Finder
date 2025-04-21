import React from 'react';

const SearchBar = ({ query, setQuery }) => (
  <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search GitHub users..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      className="search-bar"
      autoFocus
    />
  </div>
);

export default SearchBar;
