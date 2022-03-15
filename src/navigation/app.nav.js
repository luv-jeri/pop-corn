import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/app/Add';
import Profile from '../pages/app/Profile';

const AppNav = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route
        path='/profile'
        element={<Profile />}
      />
    </Routes>
  );
};

export default AppNav;
