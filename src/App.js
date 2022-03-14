import './App.css';
import Navigation from './component/navigation';
import IndexNav from './navigation/index.nav';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IsLog } from './context/isLog';

function App() {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${Cookies.get('token')}`;
  axios.defaults.baseURL =
    'http://localhost:8080/api/v1/';

  return (
    <div className='App'>
      <IsLog>
        <Navigation />
        <IndexNav />
      </IsLog>
    </div>
  );
}

export default App;
