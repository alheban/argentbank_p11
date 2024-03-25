import { combineReducers } from "redux";
// import userReducer from "./user.reducer";
import authSlice from "./authSlice"
import profilSlice from "./profilSlice";

export default combineReducers({
  // user: userReducer,
  auth: authSlice,
  profil:profilSlice,

});