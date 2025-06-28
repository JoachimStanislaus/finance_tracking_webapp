import { call, put, takeLatest } from "redux-saga/effects";
import { AuthActionTypes } from "../types/authTypes.types";
import { login, register } from "../services/auth";



function* handleLogin(action: any): Generator {
  try {
    const user = yield call(login, action.payload)
    yield put({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: user.user,
    })
  } catch (error: any) {
    yield put({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: error.message
    });
  }
}

function* handleSignUp(action:any): Generator {
  try {
    const user = yield call(register, action.payload)
    yield put ({
      type: AuthActionTypes.SIGNUP_SUCCESS,
      payload: user
    })
  } catch (error: any) {
    yield put ({
      type: AuthActionTypes.SIGNUP_FAILURE,
      payload: error.message
    })
  }
}

export default function* authSaga() {
  yield takeLatest(AuthActionTypes.LOGIN_REQUEST, handleLogin);
  yield takeLatest(AuthActionTypes.SIGNUP_REQUEST, handleSignUp)
}
