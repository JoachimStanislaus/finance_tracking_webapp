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
};

export interface RegisterState {
  isRegistered: boolean | null;
}

export const initialRegisterState: RegisterState = {
  isRegistered: null,
};

export interface RootState {
  auth: AuthState;
  register: RegisterState;
}

export const initialRootState: RootState = {
  auth: initialAuthState,
  register: initialRegisterState,
};
