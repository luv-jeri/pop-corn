import './App.css';
import Navigation from './component/navigation';
import IndexNav from './navigation/index.nav';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IsLog } from './context/isLog';
import { UserContextProvider } from './context/user';

function App() {
  axios.defaults.headers.common[
    'Authorization'
  ] = `${Cookies.get('token')}`;

  axios.defaults.baseURL =
    'http://localhost:8080/api/v1/';

  return (
    <div className='App'>
      <UserContextProvider>
        <IsLog>
          <Navigation />
          <IndexNav />
        </IsLog>
      </UserContextProvider>
    </div>
  );
}

export default App;
