// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Choose your storage engine
// import rootReducer from "./reducers";

// const middleware = (store) => (next) => (action) => {
//   console.log('Action :', action);
//   next(action);
// };

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   // Specify the reducers you want to persist
//   whitelist: ['auth','profil'], // In this example, we persist the 'user' reducer
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// //   devTools: true,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }).concat(middleware),
// });

// export const persistor = persistStore(store);

// export default store;


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