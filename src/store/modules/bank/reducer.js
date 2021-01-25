import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  data: [],
  loadingCreate: false,
};

export default function bank(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@bank/GET_BANK_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@bank/GET_BANK_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@bank/GET_BANK_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@bank/CREATE_BANK_REQUEST': {
        draft.loadingCreate = true;
        break;
      }

      case '@bank/CREATE_BANK_SUCCESS': {
        draft.loadingCreate = false;
        break;
      }

      case '@bank/CREATE_BANK_FAILURE': {
        draft.loadingCreate = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
