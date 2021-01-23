import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { GetBankSuccess } from './actions';

export function* getBanks() {
  try {
    const response = yield call(api.get, 'bank-accounts');

    yield put(GetBankSuccess(response.data));
  } catch (error) {
    console.log('ERROR ', error);
  }
}

export default all([takeLatest('@bank/GET_BANK_REQUEST', getBanks)]);
