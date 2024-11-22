import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [
    {
      id: 1,
      title: "Pother Pachali",
      author: "Humayon ahmed",
      price: 99,
      quantity: 23,
    },
    {
      id: 2,
      title: "Podma nodir majhi",
      author: "Bongim chondro chottopaddhai",
      price: 49,
      quantity: 10,
    },
    {
      id: 3,
      title: "Kothaw kew nai",
      author: "Johir raihan",
      price: 109,
      quantity: 3,
    },
  ],
};

export const bookSlice = createSlice({
  name: "bookA",
  initialState: initialState,
  reducers: {
    deleteList: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id == id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
  },
});

export const { deleteList, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
