import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slices/contactsSlice";
import { filterReducer } from "./slices/filterSlice";
import { authReducer } from "./slices/authSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore(
    {
        reducer: {
           contacts: contactsReducer,
           filter: filterReducer,
           auth: persistedReducer
        }
    }
);
export const persistor = persistStore(store)
