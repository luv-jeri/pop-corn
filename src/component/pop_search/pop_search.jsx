/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PopSearch(props) {
  const [name, setName] = useState('');

  const { setMovie } = props;

  const debounce = (func, delay) => {
    return () => {
      setTimeout(() => {
        func();
      }, 1000);
    };
  };

  useEffect(() => {
    const de = debounce(search, 1000);
    de();
  }, [name]);

  const search = async () => {
    const res = await axios({
      method: 'GET',
      url: `movie?title[regex]=${name}`,
    });

    setMovie(res.data.data);
  };

  return (
    <div>
      <input
        style={{
          width: '100%',
          height: '50px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          outline: 'none',
          boxShadow: '0px 0px 5px #ccc',
          backgroundColor: '#27f5f2',
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
