import React from 'react';

const TabButtons = ({ handleClick, button, active }) => (
  <div
    className="filterGroup"
  >
    {
    button.map((buttonText) => (
      <button
        key={`${buttonText}`}
        type="button"
        onClick={() => handleClick(buttonText)}
        className={active === buttonText ? 'active' : 'btn'}
      >
        {buttonText}
      </button>
    ))
}
  </div>

);

export default TabButtons;
