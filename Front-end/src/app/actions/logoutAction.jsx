import { createAsyncThunk } from "@reduxjs/toolkit";

export const LogOut = createAsyncThunk(
    'authlogOut',
    async (_, { rejectWithValue }) => {
      try {
        sessionStorage.removeItem('token'); // Supprimez le token du local storage
  
        return null;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );