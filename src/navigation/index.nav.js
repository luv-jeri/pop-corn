import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from './../pages/signup';
import Card from './../pages/card';

const IndexNav = () => {
  return (
    <Routes>
      <Route
        path='/login'
        element={<Login />}
      ></Route>
      <Route
        path='/signup'
        element={<Signup />}
      />
      <Route path='/home' element={<Card />} />
    </Routes>
  );
};

export default IndexNav;
