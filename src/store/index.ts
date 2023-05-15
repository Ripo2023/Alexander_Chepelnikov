import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';
import onBoardingReducer from './reducers/onboarding';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import theme from './reducers/theme';

const rootReducer = combineReducers({
  userReducer,
  theme,
  onBoardingReducer,
  cartReducer,
  ordersReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
      if (__DEV__ && !process.env.JEST_WORKER_ID) {
        const createDebugger = require('redux-flipper').default;
        middlewares.push(createDebugger());
      }
      return middlewares;
    },
  });
export const store = setupStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootReducerType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof setupStore>;
export type StoreDispatchType = StoreType['dispatch'];
