import {combineReducers} from 'redux';
import {reducer as data} from './data/data.js';
import {reducer as logic} from './logic/logic.js';
import {reducer as user} from './user/user.js';
import {reducer as comment} from './comment/comment.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.LOGIC]: logic,
  [NameSpace.USER]: user,
  [NameSpace.COMMENT]: comment,
});
