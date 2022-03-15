import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useLocation } from 'react-router-dom';

export default function Profile() {
  const [user] = useContext(UserContext);
  const location = useLocation();

  console.log(location);

  console.log(user);
  return (
    <div
      style={{
        backgroundColor: '#333',
      }}
    >
      <div>
        <h1>Profile</h1>
        <h1>Hello</h1> <h1>{user.name}</h1>
      </div>
    </div>
  );
}
