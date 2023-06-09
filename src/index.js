// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store";
// import App from "./App";

// createRoot(document.getElementById("root")).render(
// <React.StrictMode>
// <Provider store={store.store}>
// <PersistGate loading={null} persistor={store.persistor}>
// <App />
// </PersistGate>
// </Provider>
// </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

