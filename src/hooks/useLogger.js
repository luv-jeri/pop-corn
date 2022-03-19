import { useEffect } from 'react';

export default function Logger(state) {
  useEffect(() => {
    console.log(state);
  }, [state]);
}
