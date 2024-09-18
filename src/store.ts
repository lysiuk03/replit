// Libraries
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import authReducer from './pages/AuthPage/authSlice.ts';


const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;