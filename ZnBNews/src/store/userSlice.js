import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      const {email, password} = action.payload;
      const exists = state.users.find(u => u.email === email);
      if (!exists) {
        state.users.push({email, password});
      }
    },
    loginUser(state, action) {
      const {email, password} = action.payload;
      const found = state.users.find(
        u => u.email === email && u.password === password,
      );
      if (found) {
        state.currentUser = {email: found.email};
      }
    },
    logoutUser(state) {
      state.currentUser = null;
    },
  },
});

export const {addUser, loginUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;

