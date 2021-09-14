import React from 'react';

function Agree(props) {
  const { agree, setAgree } = props;
  return (
    <div>
      單一核取方塊：
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked);
        }}
      />
      <label htmlFor="">我同意網站條款</label>
    </div>
  );
}

export default Agree;
