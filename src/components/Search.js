import React from "react";

function Search({search, onHandleChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onHandleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
