import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  loadingCreate: false,
  data: [],
  operation: null,
  detailsOperations: false,
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

      case '@operations/CREATE_OPERATIONS_REQUEST': {
        draft.loadingCreate = true;
        draft.detailsOperations = false;
        break;
      }

      case '@operations/CREATE_OPERATIONS_SUCCESS': {
        draft.operation = action.payload.data;
        draft.loadingCreate = false;
        draft.detailsOperations = true;
        break;
      }

      case '@operations/CREATE_OPERATIONS_FAILURE': {
        draft.loadingCreate = false;
        draft.detailsOperations = false;
        break;
      }

      case '@operations/CLOSE_MODAL': {
        draft.detailsOperations = false;
        break;
      }

      default:
        draft.loading = false;
        draft.loadingCreate = false;
        break;
    }
  });
}
