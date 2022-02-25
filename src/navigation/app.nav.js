import { Routes, Route } from 'react-router-dom';
import Card from '../pages/card';

const AppNav = () => {
  <Routes>
    <Route path='/card' element={<Card />} />
  </Routes>;
};

export default AppNav;
