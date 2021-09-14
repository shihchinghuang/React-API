import React from 'react';

function Select(props) {
  const { selectedOption, setSelectedOption } = props;
  return (
    <div>
      下拉選單：
      <select
        name=""
        id=""
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        <option value="雞肉">雞肉</option>
        <option value="牛肉">牛肉</option>
        <option value="豬肉">豬肉</option>
      </select>
    </div>
  );
}

export default Select;
