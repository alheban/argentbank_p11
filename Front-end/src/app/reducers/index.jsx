import { combineReducers } from "redux";
import authSlice from "./authSlice"
import profilSlice from "./profilSlice";
import accountSlice from "./acountSlice"

export default combineReducers({

  auth: authSlice,
  profil: profilSlice,
  account: accountSlice,
});