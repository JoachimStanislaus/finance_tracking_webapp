import { AuthActionTypes } from "../types/authTypes.types";

export const loginRequest = (payload: {email: string; password: string}) => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload
});