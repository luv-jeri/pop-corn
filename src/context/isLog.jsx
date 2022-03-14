import { useState, createContext } from 'react';

export const IsLogContext = createContext();

export function IsLog({ children }) {
  const [isLog, setIsLog] = useState(false);

  return (
    <IsLogContext.Provider
      value={[isLog, setIsLog]}
    >
      {children}
    </IsLogContext.Provider>
  );
}
