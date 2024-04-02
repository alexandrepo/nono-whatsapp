import { WhatsappApi } from '@/features/Whatsapp/api/Whatsapp.api';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import WhatsAppSliceReducer,{ whatsAppSlice } from '@/features/Whatsapp/WhatsApp.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['WhatsAppApi'],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [WhatsappApi.reducerPath]: WhatsappApi.reducer,
    [whatsAppSlice.name]: WhatsAppSliceReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(WhatsappApi.middleware),
});

export const persistor = persistStore(store);
