// reducers/modalReducer.js
const initialState = {
    isOpen: false,
    // other modal-related state
};

const modalReducer = (state = initialState, action: { type: unknown; }) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, isOpen: true };
        case 'CLOSE_MODAL':
            return { ...state, isOpen: false };
        // other modal-related cases
        default:
            return state;
    }
};

export default modalReducer;
