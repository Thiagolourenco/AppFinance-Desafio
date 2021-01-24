/* eslint-disable require-yield */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '../../../services/api';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const data = {
      identifier: payload.email,
      password: payload.password,
    };

    const response = yield call(api.post, 'auth/local', data);

    const { jwt, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    yield put(signInSuccess(jwt, user));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Dados do usuário inválidos, por favor verificar.',
    });
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const data = {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    };

    const response = yield call(api.post, 'auth/local/register', data);

    const { jwt, user } = response.data;

    showMessage({
      message: 'Usuário Cadastrado com Sucesso',
      type: 'success',
    });

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    yield put(signUpSuccess(jwt, user));
  } catch (error) {
    console.log('ERRO +> ', error);
    yield put(signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@sign/SIGN_UP_REQUEST', signUp),
]);
