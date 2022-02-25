import "./PopInput.css"
import React from 'react';

export default function PopInput(props) {
  const { label, type, value, onChange } = props;
  return (
    <div className="pop-input-wrapper">
      <label className='pop-input-label'>
        {label}
      </label>
      <input
        className='pop-input'
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
