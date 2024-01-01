// reducers/dataTableReducer.ts
import { ActionTypes } from '../actions';

const initialState = {
  users: [],
  isModalOpen: false,
};


const dataTableReducer = (state = initialState, action: { type: string; payload: unknown; }) => {

  switch (action.type) {
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };

    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        formData: null,
        isModalOpen: false,
      };
    case ActionTypes.SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    default:
      return state;
  }

};


export default dataTableReducer;
