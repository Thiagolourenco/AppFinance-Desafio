import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { GetOperationsSuccess } from './actions';

export function* getOperations() {
  try {
    const response = yield call(api.get, 'operations');

    yield put(GetOperationsSuccess(response.data));
  } catch (error) {
    console.log('ERROR ', error);
  }
}

export default all([
  takeLatest('@operations/GET_OPERATIONS_REQUEST', getOperations),
]);
