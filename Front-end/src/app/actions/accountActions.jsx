import { createAction } from "@reduxjs/toolkit";

// Action pour ajouter un compte
export const addAccount = createAction('account/addAccount');

// Action pour définir l'identifiant du compte sélectionné
export const setSelectedAccountId = createAction('account/setSelectedAccountId');