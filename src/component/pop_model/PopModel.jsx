import { useState } from 'react';
import Styles from './PoPModel.module.css';
import axios from 'axios';
import PopButton from './../pop_button/PopButton';
import PopInput from './../pop_input/PopInput';

export default function PopModel(props) {
  const { onClose } = props;
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
    <div className={Styles.wrap}>
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
      <PopButton
        value='Add Movie'
        onTap={addMovies}
        type='m'
      />
      <button onClick={onClose}>Close</button>
    </div>
  );
}
