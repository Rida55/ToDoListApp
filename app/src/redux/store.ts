import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import {tutorialSlice} from './slice/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {userSlice} from './slice/auth-slice';
import thunkMiddleware from 'redux-thunk';
import taskSlice from './slice/taskSlice';
// import readinglistSlice from './slice/readinglistSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({

    tasks: taskSlice,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
