import React from 'react';

const Create = ({ search }) => {
  return (
    <div>
      <input autoFocus type="text" />
      <button onClick={search}>search</button>
      {/* <p>{msg}</p> */}
      {/* <p>{input}</p> */}
    </div>
  );
};

export default Create;
