import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./feats/auth-slice";
import activeReducer from "./feats/active-slice";
import menuReducer from "./feats/menu-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistenceConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = combineReducers({
  auth: persistReducer(persistenceConfig, authReducer),
  active: persistReducer(persistenceConfig, activeReducer),
  menu: persistReducer(persistenceConfig, menuReducer),
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
