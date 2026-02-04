import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addBookmark(state, action) {
      const article = action.payload;
      const exists = state.bookmarks.find(
        item => item.url === article.url && item.title === article.title,
      );
      if (!exists) {
        state.bookmarks.push(article);
      }
    },
    removeBookmark(state, action) {
      const url = action.payload;
      state.bookmarks = state.bookmarks.filter(item => item.url !== url);
    },
    clearBookmarks(state) {
      state.bookmarks = [];
    },
  },
});

export const {addBookmark, removeBookmark, clearBookmarks} = newsSlice.actions;

export default newsSlice.reducer;

