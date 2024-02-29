import { AuthState, InitialAuthState, LoginType } from "@/lib/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    email: "",
    uid: "",
  } as AuthState,
} as InitialAuthState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<LoginType>) => {
      return {
        value: {
          isAuth: true,
          email: action.payload.email,
          uid: action.payload.id,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
