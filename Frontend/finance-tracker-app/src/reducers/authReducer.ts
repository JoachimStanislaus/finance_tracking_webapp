import { AuthActionTypes } from "../types/authTypes.types";
import { initialRootState } from "./initialState";

export const authReducer = (state=initialRootState.auth, action: any) => {
    switch(action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {...state,loading:true, error:null}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {...state,user: action.payload, loading:false}
        case AuthActionTypes.LOGIN_FAILURE:
            return {...state,error:action.payload, loading:false} 
        default:
            return state;
    }
}
