import {
    configureStore,
    getDefaultMiddleware,
    // combineReducers,
  } from "@reduxjs/toolkit";
  import logger from "redux-logger";
  import storage from "redux-persist/lib/storage";
  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import appReducer from "./app/app-reducer";
  
  console.log(getDefaultMiddleware());
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];
  
  const persistConfig = {
    key: "app",
    storage,
    blacklist: ["filter"],
  };
  
  const store = configureStore({
    reducer: { app: persistReducer(persistConfig, appReducer) },
    middleware,
    devTools: process.env.NODE_ENV === "development",
  });
  
const persistor = persistStore(store);

export default { store, persistor };