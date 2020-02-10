import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const titles = [

  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Avatar`
];

ReactDOM.render(
    <App
      title={Settings.TITLE}
      genre={Settings.GENRE}
      year={Settings.YEAR}
      titles={titles}
    />,
    document.querySelector(`#root`)
);

