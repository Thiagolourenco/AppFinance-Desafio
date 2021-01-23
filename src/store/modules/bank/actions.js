export function GetBankRequest() {
  return {
    type: '@bank/GET_BANK_REQUEST',
  };
}

export function GetBankSuccess(data) {
  return {
    type: '@bank/GET_BANK_SUCCESS',
    payload: { data },
  };
}

export function GetBankFailure() {
  return {
    type: '@bank/GET_BANK_FAILURE',
  };
}
