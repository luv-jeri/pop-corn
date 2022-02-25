import './App.css';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Navigation from './component/navigation';
// import AuthNav from './navigation/auth.nav';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
