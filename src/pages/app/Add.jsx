/* eslint-disable no-unused-vars */
import "./styles/Add.css"
import { useState, useEffect } from 'react';
import PopButton from '../../component/pop_button/PopButton';
import PopInput from './../../component/pop_input/PopInput';

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
  const [actors, setActors] = useState([]);
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
    language,
  };

  const moviesDetailsFields = [
    {
      labelOfField: 'Language',
      valueOfField: language,
      onChangeOfField: setLanguage,
    },
    {
      labelOfField: 'Title',
      valueOfField: title,
      onChangeOfField: (e) => {
        setTitle(e.target.value);
      },
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
              onChange={el.onChangeOfField}
              type={el.type}
            />
          );
        })}
      </div>

      <PopButton
        value='Add Movie'
        onTap={() => {
          console.log('ADD');
        }}
        type='m'
      />
    </div>
  );
}
