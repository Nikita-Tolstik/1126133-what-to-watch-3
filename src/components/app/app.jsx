import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({title, genre, year, titles}) => {


  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      titles={titles}
    />
  );
};

App.propTypes = {

  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  titles: PropTypes.array.isRequired
};

export default App;
