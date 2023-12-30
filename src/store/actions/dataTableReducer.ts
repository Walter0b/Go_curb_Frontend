// actions/dataTableActions.js
import { User } from '@utils/models/customer/interface';
import { ActionTypes } from './index';

export const fetchUsersSuccess = (users: User) => ({
  type: ActionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

// Add other action creators for different actions (e.g., update, delete)
