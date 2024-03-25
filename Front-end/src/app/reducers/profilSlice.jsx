import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../actions/profilActions';

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  error: null,
};

const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default profilSlice.reducer;