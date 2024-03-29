// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
// import store, { persistor } from "./app/store.jsx";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./app/App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
    
//       <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//         </PersistGate>
//       </Provider>
    
//   </React.StrictMode>
// );



import { Provider } from 'react-redux'
import  store  from './app/store.jsx';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)