import { FetchData } from "@utils/models/struc";

export const ActionTypes = {
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_FORM_DATA: 'SET_FORM_DATA',
};

export const openModal = () => ({
  type: ActionTypes.OPEN_MODAL,
});

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL,
});

export const setFetchData = (formData: FetchData) => ({
  type: ActionTypes.SET_FORM_DATA,
  payload: formData,
});
