import { useState, useEffect } from 'react';

export default function useLocal(initial, name) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const value = localStorage.getItem(name);
    if (value) {
      setValue(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [value]);

  return [value, setValue];
}
