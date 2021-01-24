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

export function CreateOperationsRequest(obj) {
  return {
    type: '@operations/CREATE_OPERATIONS_REQUEST',
    payload: { obj },
  };
}

export function CreateOperationsSuccess(data) {
  return {
    type: '@operations/CREATE_OPERATIONS_SUCCESS',
    payload: { data },
  };
}

export function CreateOperationsFailure() {
  return {
    type: '@operations/CREATE_OPERATIONS_FAILURE',
  };
}

export function closeModal() {
  return {
    type: '@operations/CLOSE_MODAL',
  };
}
