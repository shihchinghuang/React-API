import React from 'react';

function Summary(props) {
  const { tOne, tTwo, tThree, price } = props;

  return (
    <div>
      <p>total tshirt: {tOne + tTwo + tThree} </p>
      <p>
        total price: $
        {(
          tOne * price.tOne +
          tTwo * price.tTwo +
          tThree * price.tThree
        ).toLocaleString()}
      </p>
    </div>
  );
}

export default Summary;
