import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  signed: false,
  user: null,
  token: null,
  loadingSignUp: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        break;
      }

      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      case '@sign/SIGN_UP_REQUEST': {
        draft.loadingSignUp = true;
        break;
      }

      case '@sign/SIGN_UP_SUCCESS': {
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        draft.loadingSignUp = false;
        draft.signed = true;
        break;
      }

      case '@sign/SIGN_UP_FAILURE': {
        draft.loadingSignUp = false;
        break;
      }

      default:
        draft.loading = false;
        draft.loadingSignUp = false;
        break;
    }
  });
}
