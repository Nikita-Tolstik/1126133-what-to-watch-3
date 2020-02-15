import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes, {shape} from 'prop-types';

const handleTitleClick = (evt) => {
  evt.preventDefault();
};

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {title, genre, year, films} = this.props;

    return (
      <Main
        title={title}
        genre={genre}
        year={year}
        films={films}
        onTitleClick={handleTitleClick}
      />
    );
  }
}


App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
