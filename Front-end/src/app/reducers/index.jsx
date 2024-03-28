import { combineReducers } from "redux";
import authSlice from "./authSlice"
import profilSlice from "./profilSlice";


export default combineReducers({

  auth: authSlice,
  profil:profilSlice,

});