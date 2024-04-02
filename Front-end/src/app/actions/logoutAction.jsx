import { createAsyncThunk } from "@reduxjs/toolkit";


export const LogOut = createAsyncThunk(
    'auth/logOut',
    async (_, {rejectWithValue }) => {
      try {
        sessionStorage.removeItem('token'); // Supprimez le token du local storage


        return null;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );