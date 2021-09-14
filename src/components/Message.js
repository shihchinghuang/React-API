import React from 'react';

function Message({ singleMsg }) {
  return (
    <div className="tweet">
      <p>{singleMsg}</p>
      <button className="btn btn-primary">delete</button>
    </div>
  );
}

export default Message;
