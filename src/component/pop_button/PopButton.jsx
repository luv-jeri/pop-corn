import './PopButton.css';
import React from 'react';

export default function PopButton(props) {
  const { value, onTap, type } = props;

  return (
    <div className='wrapper'>
      <button
        className={`submit ${type}`}
        onClick={onTap}
      >
        {value}
      </button>
    </div>
  );
}
