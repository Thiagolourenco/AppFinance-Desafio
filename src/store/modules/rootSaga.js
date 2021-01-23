import { all } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import bankSaga from './bank/sagas';
import operations from './operations/sagas';

export default function* rootSaga() {
  return yield all([authSaga, bankSaga, operations]);
}
