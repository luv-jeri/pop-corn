import React from 'react';
import './styles/login.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';
import look_cookie from '../utils/look_cookie';
import { useNavigate } from 'react-router-dom';
import PopCard from './../component/pop_card/pop_card';
import PopLoading from './../component/pop_loading/pop_loading';
import PopSearch from '../component/pop_search/pop_search';

export default function Home() {
  const [movies, setMovie] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getMovies = async () => {
    axios({
      method: 'post',
      url: 'movie',

      data: {
        title: '',
        year: '',
      },
    });

    const res = await axios.get(
      'movie'
    );

    setMovie(res.data.data);

    console.log(res.data.data[0]);
    setLoading(false);
  };

  useEffect(() => {
    look_cookie('token', getMovies, () => {
      navigate('/login');
    });
  }, [navigate]);

  return (
    <div className='container'>
      <PopSearch setMovie={setMovie} />
      {loading ? (
        <PopLoading />
      ) : (
        movies.map((movie, index) => {
          return (
            <PopCard
              key={index}
              name={movie.name}
              description={movie.description}
              language={movie.language}
              rating={movie.rating}
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              director={movie.director}
            />
          );
        })
      )}
    </div>
  );
}
