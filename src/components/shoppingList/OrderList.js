import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  const { tOne, tTwo, tThree, price, setTOne, setTTwo, setTThree, name } =
    props;

  return (
    <div className="d-flex justify-content-around">
      <ProductItem
        t={tOne}
        price={price.tOne}
        setT={setTOne}
        name={name.tOne}
      />
      <hr />
      <ProductItem
        t={tTwo}
        price={price.tTwo}
        setT={setTTwo}
        name={name.tTwo}
      />
      <hr />
      <ProductItem
        t={tThree}
        price={price.tThree}
        setT={setTThree}
        name={name.tThree}
      />
    </div>
  );
}

export default OrderList;
