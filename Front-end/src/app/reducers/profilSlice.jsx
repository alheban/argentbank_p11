import { createSlice } from '@reduxjs/toolkit';
import { getProfil } from '../actions/profilActions';
import { putProfil } from '../actions/UpdateProfilAction';

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
      .addCase(getProfil.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfil.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(putProfil.fulfilled, (state, action) => {
        state.user = { ...state.user, userName: action.payload };
        state.error = null;
      })
      .addCase(putProfil.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

export default profilSlice.reducer;