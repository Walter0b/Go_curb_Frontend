// reducers/index.js
import { combineReducers } from 'redux';
import dataTableReducer from './dataTableReducer';

const rootReducer = combineReducers({
  dataTable: dataTableReducer,
  // Add other reducers if needed
});

export default rootReducer;
