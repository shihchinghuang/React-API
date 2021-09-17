import React from 'react';

const Card = ({ data, loading }) => {
  return (
    <div className="picture">
      <div className="word">
        <a
          className="download"
          target="_blank"
          href={data.src.large}
          rel="noreferrer"
        >
          click me to download
        </a>
        <p>credit: {data.photographer}</p>
      </div>
      <div className="img">
        <img src={data.src.large} alt="" />
      </div>
    </div>
  );
};

export default Card;
