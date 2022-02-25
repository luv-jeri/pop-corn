import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';

const AuthNav = () => {
  alert('AuthNav');
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
  </Routes>;
};

export default AuthNav;
