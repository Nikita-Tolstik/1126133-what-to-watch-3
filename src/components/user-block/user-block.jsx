import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selectors.js';
import {AppRoute} from '../../const.js';

const BASE_URL = `https://htmlacademy-react-3.appspot.com`;

const UserBlock = ({authorizationStatus, userInfo}) => {
  let markUp;

  switch (authorizationStatus) {
    case AuthorizationStatus.NO_AUTH:
      markUp = (
        <Link
          to={AppRoute.LOGIN}
          className="user-block__link">
            Sign in
        </Link>
      );
      break;

    case AuthorizationStatus.AUTH:
      markUp = (
        <div className="user-block__avatar">
          <img src={`${BASE_URL}${userInfo}`} alt="User avatar" width="63" height="63" />
        </div>
      );
      break;
  }

  return (
    <div className="user-block">
      {markUp}
    </div>
  );
};

UserBlock.propTypes = {
  userInfo: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH,
    AuthorizationStatus.NO_AUTH,
    AuthorizationStatus.PENDING,
    AuthorizationStatus.INITIAL,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});


export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
