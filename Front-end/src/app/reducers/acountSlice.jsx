import { createSlice } from "@reduxjs/toolkit";
import { addAccount, setSelectedAccountId } from "../actions/accountActions"; // Importez les actions depuis le fichier accountActions.js

const initialAccountData = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    totalamount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    totalamount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    totalamount: "$184.30",
    description: "Current Balance",
  },
];

const initialState = {
  accounts: [...initialAccountData],
  selectedAccountId: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAccount, (state, action) => {
        state.accounts.push(...action.payload);
      })
      .addCase(setSelectedAccountId, (state, action) => {
        state.selectedAccountId = action.payload;
      });
  },
});

export default accountSlice.reducer;