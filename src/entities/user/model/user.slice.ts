import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./user.types";
import { userApi } from "../api/user.api";

const initialState: IUserState = {
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state = { userId: "" };
      console.log(payload);
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
