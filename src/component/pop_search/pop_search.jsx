import React from 'react';

export default function PopSearch(props) {
  const { movies, setMovie } = props;

  const search = (name) => {
    const movie = movies.find(
      (movie) => movie.title === name
    );
    if (movie) {
      setMovie([movie]);
    }
  };

  return (
    <div>
      <input
        style={{
          width: '100%',
          height: '50px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          outline: 'none',
          boxShadow: '0px 0px 5px #ccc',
          backgroundColor: '#27f5f2',
        }}
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
}
