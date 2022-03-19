import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useFetch(path) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(path);
    setData(res.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
