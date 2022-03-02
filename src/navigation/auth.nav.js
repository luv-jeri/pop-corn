import { Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';

const AuthNav = () => {
  return (
    <div>
      <Route path='/login' element={<Login />} />
      <Route
        path='/signup'
        element={<Signup />}
      />
    </div>
  );
};

export default AuthNav;
