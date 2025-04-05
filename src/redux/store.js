import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filterSlice';
import todosReducer from './todosSlice';

const presistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(presistConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ігноруємо дію persist/PERSIST
      },
    }),
});

export const persistor = persistStore(store);
