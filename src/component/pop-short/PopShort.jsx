import React from 'react';
import Styles from './PopShort.module.css';
import Logo from '../../logo1.png';

export default function PopShort(props) {
  const { name, poster } = props;
  console.log('PopShort', poster);
  return (
    <div
      style={{
        backgroundImage: `url(${
          poster ||
          'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        })`,
      }}
      className={Styles.wrap}
    >
      <div className={Styles.name}>{name}</div>
    </div>
  );
}
