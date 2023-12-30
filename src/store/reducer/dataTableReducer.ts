// reducers/dataTableReducer.js
import { ActionTypes } from '../actions';

const initialState = {
  users: [], // Initial state for your data table
};

const dataTableReducer = (state = initialState, action: { type: string; payload?: unknown; }) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    // Add other cases for different actions (e.g., update, de"lete)

    default:
      return state;
  }
};

export default dataTableReducer;
