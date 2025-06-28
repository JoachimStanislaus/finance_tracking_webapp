import { AuthActionTypes } from "../types/authTypes.types";

export const loginRequest = (payload: { email: string; password: string }) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload,
});

export const signUpRequest = (payload: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  birthday: string;
}) => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload,
});
