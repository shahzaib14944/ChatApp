import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index'

const preloadedState = {}

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})