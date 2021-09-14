import React from 'react';

function Input(props) {
  const { text, setText } = props;

  return (
    <div>
      {/* input 可控表單元素必要條件，value 要對應到狀態，更動事件的 callback 必須設定 value 對應的狀態值  */}
      文字輸入框：
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
