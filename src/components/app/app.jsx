import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const handleTitleClick = (evt) => {
  evt.preventDefault();
};

const App = ({title, genre, year, titles}) => {

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      titles={titles}
      onTitleClick={handleTitleClick}
    />
  );
};

App.propTypes = {

  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  titles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
