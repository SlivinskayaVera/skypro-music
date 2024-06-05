import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  authState: boolean;
  userData: LoginUser;
  token: TokenType;
};

type TokenType = {
  refresh: string;
  access: string;
};

type LoginUser = {
  username: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

const initialState: AuthStateType = {
  authState: false,
  userData: {
    username: "Войти",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  },
  token: { refresh: "", access: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<TokenType>) => {
      state.token = action.payload;
    },

    setLoginData: (state, action: PayloadAction<LoginUser>) => {
      state.userData = action.payload;
    },
  },
});

export const { setAuthState, setLoginData } = authSlice.actions;
export const authReducer = authSlice.reducer;
