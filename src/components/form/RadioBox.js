import React from 'react';

function RadioBox(props) {
  const { gender, setGender } = props;
  return (
    <div>
      {/* 單選的屬性主要是 checked 對應 onchange，checked 值是布林值 */}
      單選選項：
      <br />
      {/* <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="">女</label>
        <br />
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="">男</label>
        <br />
        <input
          type="radio"
          value="其他"
          checked={gender === '其他'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="">其他</label> */}
      {/* 用陣列 map 產生選項按鈕 */}
      {/* 用 map 就要加 key 值，否則 react 會警告產生多個項目時要加 key */}
      {['女', '男', '未定'].map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              checked={gender === v}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="">{v}</label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioBox;
