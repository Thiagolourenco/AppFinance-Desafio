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

export function CreateBankRequest(name, overdraft) {
  return {
    type: '@bank/CREATE_BANK_REQUEST',
    payload: { name, overdraft },
  };
}

export function CreateBankSuccess() {
  return {
    type: '@bank/CREATE_BANK_SUCCESS',
  };
}

export function CreateBankFailure() {
  return {
    type: '@bank/CREATE_BANK_FAILURe',
  };
}
