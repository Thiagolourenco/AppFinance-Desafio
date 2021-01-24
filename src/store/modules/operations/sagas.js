import { all, call, takeLatest, put } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '../../../services/api';
import {
  GetOperationsSuccess,
  CreateOperationsSuccess,
  CreateOperationsFailure,
} from './actions';

export function* getOperations() {
  try {
    const response = yield call(api.get, 'operations');

    yield put(GetOperationsSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'warning',
      message: 'Algo de Errado está ocorrendo na listagem. Tente Novamente!',
    });
  }
}

export function* createOperations({ payload }) {
  try {
    const response = yield call(api.post, 'operations', payload.obj);

    showMessage({
      type: 'success',
      message: 'Operação Criada com Sucesso',
    });

    yield put(CreateOperationsSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Error ao Criar uma Operação',
    });
    yield put(CreateOperationsFailure());
  }
}

export default all([
  takeLatest('@operations/GET_OPERATIONS_REQUEST', getOperations),
  takeLatest('@operations/CREATE_OPERATIONS_REQUEST', createOperations),
]);
