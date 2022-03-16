import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import { UserContext } from '../../context/user';
import { useLocation } from 'react-router-dom';
import Styles from './styles/Profile.module.css';
import DP from '../../me2.jpg';
import axios from 'axios';
// COMPONENT
import PopShort from '../../component/pop-short/PopShort';

export default function Profile() {
  const [user] = useContext(UserContext);
  const location = useLocation();

  const [movies, setMovie] = useState([]);

  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    axios({
      method: 'post',
      url: 'movie',

      data: {
        title: '',
        year: '',
      },
    });

    const res = await axios.get('movie');

    setMovie(res.data.data);

    console.log(res.data.data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div
      className='warp flex f-col'
      style={{
        height: '100vh',
      }}
    >
      <div className={`${Styles.upper} flex f-1`}>
        <div className='flex f-1 j-c a-c'>
          <img
            src={DP}
            alt='DP'
            className={Styles.profilePic}
          />
        </div>

        <div className='right f-1 flex f-col   '>
          <div className='upper f-1 flex f-col j-c'>
            <h2>
              Name : {user.name || 'Mukesh'}
            </h2>
            <h2>
              Email :{' '}
              {user.email || 'mukesh@gmail.com'}
            </h2>
          </div>
          <div
            className={`flex f-1 j-sb a-c ${Styles.counter}`}
          >
            <div>
              <h2>Likes</h2>
              <hr />
              <h1>100</h1>
            </div>
            <div className='line'></div>
            <div>
              <h3>Dislikes</h3>
              <hr />
              <h1>100</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='lower flex o-scroll  '>
        {loading ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : (
          movies.map((movie) => (
            <div
              style={{
                marginLeft: '30px',
              }}
            >
              <PopShort
                name={movie.title}
                poster={movie.poster}
              ></PopShort>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
