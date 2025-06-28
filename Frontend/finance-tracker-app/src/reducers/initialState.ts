export interface AuthState {
  user: null | {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  loading: boolean;
  error: null;
}



export const initialAuthState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

export interface RootState {
  auth: AuthState;
}

export const initialRootState: RootState = {
  auth: initialAuthState,
}