import React from 'react';

const Create = ({ search, setInput, enter }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="create">
      <h1>串接 PEXEL API</h1>
      <input
        placeholder="enter English vocabulary..."
        onChange={inputHandler}
        autoFocus
        type="text"
        // onKeyPress={enter}
      />
      <button onClick={search}>search</button>
      {/* <p>{msg}</p> */}
      {/* <p>{input}</p> */}
    </div>
  );
};

export default Create;
