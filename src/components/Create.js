import React from 'react';

const Create = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="create">
      <h1>串接 PEXEL API</h1>
      <input onChange={inputHandler} autoFocus type="text" />
      <button onClick={search}>search</button>
      {/* <p>{msg}</p> */}
      {/* <p>{input}</p> */}
    </div>
  );
};

export default Create;
