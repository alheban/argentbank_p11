import { createSlice } from '@reduxjs/toolkit';
import { LogIn } from '../actions/authActions';
import { LogOut } from '../actions/logoutAction';
import { PURGE } from "redux-persist";

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LogIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = action.payload;
      })
      .addCase(LogOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = null;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = action.payload;
      })
      .addCase(PURGE, (state) => {
        customEntityAdapter.removeAll(state);
    })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;