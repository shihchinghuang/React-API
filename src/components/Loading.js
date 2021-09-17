import React from 'react';
import WalkingDog from '../img/undraw_Dog_walking_re_l61p.svg';

const Loading = () => {
  return (
    <div className="loading">
      <h3>one more second...</h3>
      <img src={WalkingDog} alt="" />
    </div>
  );
};

export default Loading;
