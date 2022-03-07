/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function PopSearch(props) {
  const [name, setName] = useState('');

  const { setMovie } = props;

  const search = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie?title[regex]=${name}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(
            'token'
          )}`,
        },
      }
    );

  
    setMovie(res.data.data);
  };

  useEffect(() => {
    search();
  }, [name]);

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
