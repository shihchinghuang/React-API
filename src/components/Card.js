import React from 'react';
import Message from './Message';

function Card({ msg, setMsg }) {
  return (
    <>
      <div className="allTweets">
        {msg.map((singleMsg) => (
          <Message singleMsg={singleMsg} />
        ))}
      </div>
    </>
  );
}

export default Card;
