import { createAsyncThunk } from "@reduxjs/toolkit";


export const getProfil = createAsyncThunk(
  'authgetProfil',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        return data.body;
      }

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);