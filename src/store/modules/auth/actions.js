export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signInOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signUpRequest(username, email, password) {
  return {
    type: '@sign/SIGN_UP_REQUEST',
    payload: { username, email, password },
  };
}

export function signUpSuccess(token, user) {
  return {
    type: '@sign/SIGN_UP_SUCCESS',
    payload: { token, user },
  };
}

export function signUpFailure() {
  return {
    type: '@sign/SIGN_UP_FAILURE',
  };
}
