import Cookies from "js-cookie";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  _id: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
  phoneNumber: string;
  profilePhoto?: string | undefined;
};
export type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      Cookies.set("accessToken", token);
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
