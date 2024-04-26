import menuFilterReducer from '@/redux/features/menuFilterSlice';
import tableReducer from '@/redux/features/tableSlice';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';
import { feedbackApi } from './services/feedbackApi';
import { categoryApi } from './services/categoryApi';
import { customerApi } from './services/customerApi';
import { discountApi } from './services/discountApi';
import { modifierApi } from './services/modifierApi';
import { orderApi } from './services/orderApi';
import { paymentApi } from './services/paymentApi';
import { productApi } from './services/productApi';
import { diningTableApi } from './services/tableApi';
import { userApi } from './services/userApi';
import { taxInvoiceApi } from './services/taxInvoiceApi';
import { billApi } from './services/billApi';
// export const store = configureStore({
//   reducer: {
//     basketReducer,
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware]),
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      basketReducer,
      tableReducer,
      menuFilterReducer,
      [userApi.reducerPath]: userApi.reducer,
      [productApi.reducerPath]: productApi.reducer,
      [modifierApi.reducerPath]: modifierApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [discountApi.reducerPath]: discountApi.reducer,
      [diningTableApi.reducerPath]: diningTableApi.reducer,
      [orderApi.reducerPath]: orderApi.reducer,
      [customerApi.reducerPath]: customerApi.reducer,
      [paymentApi.reducerPath]: paymentApi.reducer,
      [feedbackApi.reducerPath]: feedbackApi.reducer,
      [taxInvoiceApi.reducerPath]: taxInvoiceApi.reducer,
      [billApi.reducerPath]: billApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
        userApi.middleware,
        productApi.middleware,
        modifierApi.middleware,
        categoryApi.middleware,
        discountApi.middleware,
        diningTableApi.middleware,
        orderApi.middleware,
        customerApi.middleware,
        paymentApi.middleware,
        feedbackApi.middleware,
        taxInvoiceApi.middleware,
        billApi.middleware,
      ]),
  });
};

// setupListeners(store.dispatch);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
