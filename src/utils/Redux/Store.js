import {configureStore, combineReducers} from '@reduxjs/toolkit';
import DocumentSlice from './DocumentSlice';

const rootReducer = combineReducers({
  DocumentSlice,
});

const Store = configureStore({
  reducer: rootReducer,
});



export default Store;
