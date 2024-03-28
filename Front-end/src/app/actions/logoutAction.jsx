import { createAsyncThunk } from "@reduxjs/toolkit";

export const LogOut = createAsyncThunk(
    'authlogOut',
    async (_, { rejectWithValue }) => {
      try {
        localStorage.removeItem('token'); // Supprimez le token du local storage
  
        return null;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );