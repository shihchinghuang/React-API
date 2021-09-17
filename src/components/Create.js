import React from 'react';

const Create = ({ search }) => {
  return (
    <div className="create">
      <h1>串接 PEXEL API</h1>
      <input autoFocus type="text" />
      <button onClick={search}>search</button>
      {/* <p>{msg}</p> */}
      {/* <p>{input}</p> */}
    </div>
  );
};

export default Create;
