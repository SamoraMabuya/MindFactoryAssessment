import React from 'react';

const ActionButton = ({ text, actionBtnStyle }) => (
  <div className="actionbtn">
    <button
      className={actionBtnStyle}
      type="button"
    >
      {text}
    </button>
  </div>

);

export default ActionButton;
