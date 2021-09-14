import React from 'react';

function ProductItem(props) {
  const { t, price, setT, name } = props;

  return (
    <div>
      <p>
        {name}: {t}
      </p>
      <p>單價： ${price}</p>
      {/* toLocaleString 千位數逗號 */}
      <p>小計： ${(t * price).toLocaleString()}</p>
      <button
        className="btn btn-primary mr-5"
        onClick={() => {
          // 三元運算不得小於一
          const newT = t - 1 < 1 ? 1 : t - 1;
          setT(newT);
        }}
      >
        -
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setT(t + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default ProductItem;
