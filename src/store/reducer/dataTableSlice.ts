// // reducers/dataTableSlice.ts

// import { createSlice } from '@reduxjs/toolkit';
// import { deleteUserData } from '../actions';

// const initialState = {
//     users: [],
//     isModalOpen: false,
// };

// const dataTableSlice = createSlice({
//     name: 'dataTable',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(deleteUserData.fulfilled, (state, action) => {
//                 // Handle successful delete
//                 const deletedUserId = action.payload;
//                 // Update the state by removing the user with the deleted ID
//                 state.users = state.users.filter((user) => user.id !== deletedUserId);
//             })
//             // .addCase(deleteUserData.pending, (state) => {
//             // })
//             // .addCase(deleteUserData.rejected, (state) => {
//             // });
//     },
// });

// export default dataTableSlice.reducer;
