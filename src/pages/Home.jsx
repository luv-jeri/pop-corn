import React from 'react';
import './styles/login.css';

import { useState } from 'react';
import Child from './../component/pop_card/pop_card';

export default function Parent() {
  const [data, setData] = useState('Update me');

  return (
    <div className='pop-container'>
      <h1>I am Parent - {data}</h1>

      <Child
        someGoodProp={data}
        setter={setData}
      />
    </div>
  );
}
