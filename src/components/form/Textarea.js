import React from 'react';

function Textarea(props) {
  const { textarea, setTextarea } = props;
  return (
    <div>
      文字輸入區域：
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value);
        }}
      />
    </div>
  );
}

export default Textarea;
