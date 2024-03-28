import { createAsyncThunk } from "@reduxjs/toolkit";


export const putProfil = createAsyncThunk(
  'updateputProfil',
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Échec de la mise à jour du nom');
      }

      const data = await response.json();
      

      return data.body.userName;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);