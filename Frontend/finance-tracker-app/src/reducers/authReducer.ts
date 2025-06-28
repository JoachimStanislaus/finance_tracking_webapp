import { AuthActionTypes } from "../types/authTypes.types";
import { initialRootState } from "./initialState";

export const authReducer = (state = initialRootState.auth, action: any) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const registerReducer = (
  state = initialRootState.register,
  action: any
) => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_REQUEST:
      return state;
    case AuthActionTypes.SIGNUP_SUCCESS:
      return { ...state, isRegistered: true };
    case AuthActionTypes.SIGNUP_FAILURE:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
};
