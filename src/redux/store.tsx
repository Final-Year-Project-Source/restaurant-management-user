import tableReducer from '@/redux/features/tableSlice';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      basketReducer,
      tableReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
  });
};

// setupListeners(store.dispatch);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
