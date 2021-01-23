import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function operations(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@operations/GET_OPERATIONS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@operations/GET_OPERATIONS_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@operations/GET_OPERATIONS_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
