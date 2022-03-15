import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function PopCard(props) {
  const navigate = useNavigate();
  const {
    name,
    description,
    language,
    rating,
    title,
    poster,
    genre,
    director,
  } = props;

  return (
    <div>
      <div
        className='pop-card'
        onClick={() => {
          navigate(`/profile/${name}`);
        }}
      >
        <div className='card-image'>
          <img
            src={poster}
            alt='poster'
            height={100}
            width={100}
          />
          <span className='card-title'>
            {name}
          </span>
        </div>
        <div className='card-content'>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <a href='#'>{language}</a>
          <a href='#'>{rating}</a>
          <a href='#'>{title}</a>
          <a href='#'>{genre}</a>
          <a href='#'>{director}</a>
        </div>
      </div>
    </div>
  );
}
