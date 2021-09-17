import React from 'react';

const Card = ({ data, loading }) => {
  return (
    <div>
      <div className="picture">
        <p>{data.photographer}</p>
        <img src={data.src.large} alt="" />
        <a target="_blank" href={data.src.large} rel="noreferrer">
          download
        </a>
      </div>
    </div>
  );
};

export default Card;
