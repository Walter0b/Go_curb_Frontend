// store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
    reducer: rootReducer,
    // Add other store configurations if needed
});

export default store;
