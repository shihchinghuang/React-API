import React from 'react';

const Category = ({ v, search }) => {
  return (
    // div class category 在 homepage
    <>
      <button onClick={search}>{v}</button>
    </>
  );
};

export default Category;
