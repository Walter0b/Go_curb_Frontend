// reducers/index.ts
import { combineReducers } from 'redux';
import dataTableReducer from './dataTableReducer';

const rootReducer = combineReducers({
  dataTable: dataTableReducer,
});

export default rootReducer;
