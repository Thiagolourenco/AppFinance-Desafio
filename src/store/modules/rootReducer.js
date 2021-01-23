import { combineReducers } from 'redux';

import auth from './auth/reducer';
import bank from './bank/reducer';
import operations from './operations/reducer';

export default combineReducers({
  auth,
  bank,
  operations,
});
