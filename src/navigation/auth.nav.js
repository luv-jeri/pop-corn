import { Routes ,Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import React from 'react';

const AuthNav = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route
        path='/signup'
        element={<Signup />}
      />
    </Routes>
  );
};

export default AuthNav;
