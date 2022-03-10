/* eslint-disable no-unused-vars */
import './styles/Add.css';
import { useState } from 'react';
import PopButton from '../../component/pop_button/PopButton';
import PopInput from './../../component/pop_input/PopInput';
import axios from 'axios';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] =
    useState('');
  const [actors, setActors] = useState([]); //
  const [trailer, setTrailer] = useState('');
  const [language, setLanguage] = useState('');

  // ! TESTING PURPOSES ONLY
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    title,
    director,
    year,
    genre,
    poster,
    rating,
    duration,
    description,
    actors,
    trailer,
  };

  const addMovies = async () => {
    try {
      const res = await axios.post('movie', data);
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  const moviesDetailsFields = [
    {
      labelOfField: 'Language',
      valueOfField: language,
      setter: setLanguage,
    },
    {
      labelOfField: 'Title',
      valueOfField: title,
      setter: setTitle,
    },
    {
      labelOfField: 'Director',
      valueOfField: director,
      setter: setDirector,
    },
    {
      labelOfField: 'Year',
      valueOfField: year,
      setter: setYear,
      type: 'date',
    },
    {
      labelOfField: 'Genre',
      valueOfField: genre,
      setter: setGenre,
    },
    {
      labelOfField: 'Poster',
      valueOfField: poster,
      setter: setPoster,
      type: 'url',
    },
    {
      labelOfField: 'Rating',
      valueOfField: rating,
      setter: setRating,
      type: 'number',
    },
    {
      labelOfField: 'Duration',
      valueOfField: duration,
      setter: setDuration,
    },
    {
      labelOfField: 'Description',
      valueOfField: description,
      setter: setDescription,
    },
    {
      labelOfField: 'Actors',
      valueOfField: actors,
      setter: setActors,
    },
    {
      labelOfField: 'Trailer',
      valueOfField: trailer,
      setter: setTrailer,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#333',
        height: '100vh',
      }}
    >
      <div class='wrap'>
        {moviesDetailsFields.map((el) => {
          return (
            <PopInput
              label={el.labelOfField}
              value={el.valueOfField}
              onChange={(e) => {
                el.setter(e.target.value);
              }}
              type={el.type}
            />
          );
        })}
      </div>

      <PopButton
        value='Add Movie'
        onTap={addMovies}
        type='m'
      />

      <div>
        <input
          type='text'
          placeholder='Enter actors'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              setActors([
                event.target.value,
                ...actors,
              ]);

              event.target.value = '';
            }
          }}
          style={{
            height: 50,
            width: 400,
            margin: '0 auto',
            fontSize: 22,
          }}
        />
        {actors.map((el) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
                color: '#fff',
              }}
            >
              <span>{el}</span>
              <button
                onClick={() => {
                  setActors(
                    actors.filter((e) => e !== el)
                  );
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
