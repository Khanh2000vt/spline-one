import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
interface IState {
  isLoading: boolean;
  errorMessage: string;

  token: string | null;
}

interface IPayload {
  token: string;
}

const initialState: IState = {
  isLoading: false,
  errorMessage: "",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logoutAuth: () => {
      return initialState;
    },
    loginAuth: (state: IState, action: PayloadAction<IPayload>) => {
      const { token } = action.payload;
      state.token = token;
    },
  },
});

export const { logoutAuth, loginAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
