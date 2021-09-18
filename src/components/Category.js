import React from 'react';

const Category = ({ categoryButton, search, cakeURL, dogURL, catURL }) => {
  return (
    <div>
      <button
        onClick={() => {
          search(`{categoryButton}URL`);
        }}
      >
        {categoryButton}
      </button>
    </div>
  );
};

export default Category;
