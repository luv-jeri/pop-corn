import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/app/Add';


const AppNav = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
    </Routes>
  );
};

export default AppNav;
