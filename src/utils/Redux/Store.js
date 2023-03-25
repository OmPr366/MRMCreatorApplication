import {configureStore, combineReducers} from '@reduxjs/toolkit';
import DocumentSlice from './DocumentSlice';
import CsvDataSlice from './CsvDataSlice';

const rootReducer = combineReducers({
  DocumentSlice,
  CsvDataSlice
});

const Store = configureStore({
  reducer: rootReducer,
});



export default Store;
