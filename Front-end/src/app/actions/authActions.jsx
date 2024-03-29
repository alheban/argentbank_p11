import { createAsyncThunk } from "@reduxjs/toolkit";

export const LogIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Username / password invalid');
      }
      
      const data = await response.json();
      const token = data.body.token;

      // Enregistrer le token dans le local storage ou la session storage en fonction de rememberMe
      if (rememberMe) {
        localStorage.setItem("token", token);
        console.log("Token enregistré dans localStorage :", token);
      } else {
        sessionStorage.setItem("token", token);
        console.log("Token enregistré dans sessionStorage :", token);
      }


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);