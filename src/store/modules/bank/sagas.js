import { all, call, takeLatest, put } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '../../../services/api';
import {
  GetBankSuccess,
  GetBankFailure,
  CreateBankSuccess,
  CreateBankFailure,
} from './actions';

export function* getBanks() {
  try {
    const response = yield call(api.get, 'bank-accounts');

    yield put(GetBankSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Ocorreu um Error',
    });
    yield put(GetBankFailure());
  }
}

export function* createBank({ payload }) {
  try {
    const data = {
      name: payload.name,
      overdraft: payload.overdraft,
    };

    yield call(api.post, 'bank-accounts', data);

    showMessage({
      type: 'success',
      message: 'Banco Adicionado Com Sucesso!',
    });
    yield call(CreateBankSuccess());
  } catch (error) {
    yield put(CreateBankFailure());
  }
}

export default all([
  takeLatest('@bank/GET_BANK_REQUEST', getBanks),
  takeLatest('@bank/CREATE_BANK_REQUEST', createBank),
]);
