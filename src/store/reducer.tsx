// reducers/index.js
import { combineReducers } from 'redux';
import modalReducer from './modalReducer'; // Create this file
import dataTableReducer from './actions/dataTableReducer'; // Create this file

const rootReducer = combineReducers({
  modal: modalReducer,
  dataTable: dataTableReducer,
});

export default rootReducer;
