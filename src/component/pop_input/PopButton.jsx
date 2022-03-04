import './PopButton.css';
import React from 'react';

export default function PopButton(props) {
  const { hapla, onTap, type } = props;

  return (
    <div className='wrapper'>
      <button
        className={`submit ${type}`}
        onClick={onTap}
      >
        {hapla}
      </button>
    </div>
  );
}
