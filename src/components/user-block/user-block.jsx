import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {ActionCreator, ScreenType} from '../../reducer/screen-type/screen-type.js';
import {getUserInfo} from '../../reducer/user/selectors.js';

const BASE_URL = `https://htmlacademy-react-3.appspot.com`;

const UserBlock = ({authorizationStatus, userInfo, onSignInClick}) => {
  let markUp;

  switch (authorizationStatus) {
    case AuthorizationStatus.NO_AUTH:
      markUp = (
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onSignInClick(ScreenType.AUTH);
          }}
          href="" className="user-block__link">Sign in</a>
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
  onSignInClick: PropTypes.func.isRequired,
  userInfo: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.oneOf([
    AuthorizationStatus.AUTH,
    AuthorizationStatus.NO_AUTH
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick(screenType) {
    dispatch(ActionCreator.changeScreen(screenType));
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
