import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
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

export default App;
