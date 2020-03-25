import React from 'react';
import PropTypes from 'prop-types';
import OverviewTab from '../overview-tab/overview-tab.jsx';
import DetailsTab from '../details-tab/details-tab.jsx';
import ReviewsTab from '../reviews-tab/reviews-tab.jsx';

const TAG_REF = `A`;

const TabType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const NavigationList = ({film, onElementClick, activeValue}) => {
  const activeTab = activeValue;
  const onTabClick = onElementClick;
  let activeTabComponent;

  switch (activeTab) {
    case TabType.OVERVIEW:
      activeTabComponent = (
        <OverviewTab
          film={film}
        />
      );
      break;

    case TabType.DETAILS:
      activeTabComponent = (
        <DetailsTab
          film={film}
        />
      );
      break;

    case TabType.REVIEWS:
      activeTabComponent = (
        <ReviewsTab
        />
      );
      break;
  }

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul
          onClick={(evt) => {
            evt.preventDefault();

            if (evt.target.tagName !== TAG_REF || evt.target.textContent === activeTab) {
              return;
            }

            const tabType = evt.target.textContent;
            onTabClick(tabType);
          }}
          className="movie-nav__list">

          <li className={`movie-nav__item ${activeTab === TabType.OVERVIEW && `movie-nav__item--active`}`}>
            <a href="#" className="movie-nav__link">{TabType.OVERVIEW}</a>
          </li>

          <li className={`movie-nav__item ${activeTab === TabType.DETAILS && `movie-nav__item--active`}`}>
            <a href="#" className="movie-nav__link">{TabType.DETAILS}</a>
          </li>

          <li className={`movie-nav__item ${activeTab === TabType.REVIEWS && `movie-nav__item--active`}`}>
            <a href="#" className="movie-nav__link">{TabType.REVIEWS}</a>
          </li>

        </ul>
      </nav>

      {activeTabComponent}
    </React.Fragment>
  );
};


NavigationList.propTypes = {

  activeValue: PropTypes.oneOf([
    TabType.OVERVIEW, TabType.DETAILS, TabType.REVIEWS,
  ]).isRequired,
  onElementClick: PropTypes.func.isRequired,

  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    videoPreview: PropTypes.string.isRequired,
  }).isRequired,
};

export {TabType};
export default NavigationList;
