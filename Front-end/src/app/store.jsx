

import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"

const middleware = (store) => (next) => (action) => {
    console.log('Action :', action);
    next(action);
  };

const store = configureStore(
    {
        reducer :rootReducer,
        devTools:true,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
    }
)
export default store