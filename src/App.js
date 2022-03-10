import './App.css';
import Navigation from './component/navigation';
import IndexNav from './navigation/index.nav';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${Cookies.get('token')}`;
  axios.defaults.baseURL =
    'http://localhost:8080/api/v1/';

  return (
    <div className='App'>
      <Navigation />
      <IndexNav />
    </div>
  );
}

export default App;
