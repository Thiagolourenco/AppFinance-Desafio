export function GetOperationsRequest() {
  return {
    type: '@operations/GET_OPERATIONS_REQUEST',
  };
}

export function GetOperationsSuccess(data) {
  return {
    type: '@operations/GET_OPERATIONS_SUCCESS',
    payload: { data },
  };
}

export function GetOperationsFailure() {
  return {
    type: '@operations/GET_OPERATIONS_FAILURE',
  };
}
