import { useEffect, useState } from "react";
import { addBook, updateBook } from "./bookSlice";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";

const AddBook = ({ bookToBeEdit, onHandeCancel }) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  useEffect(() => {
    if (bookToBeEdit) {
      setBook(bookToBeEdit);
    }
  }, [bookToBeEdit]);

  return (
    <form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        if (bookToBeEdit) {
          dispatch(updateBook(book));
        } else {
          dispatch(addBook({ ...book, id: nanoid() }));
        }
        setBook({
          title: "",
          author: "",
          price: "",
          quantity: "",
        });
      }}
    >
      <h2 className="text-center">CRUD Application</h2>
      <div
        style={{ marginTop: "1rem" }}
        className="d-flex align-items-center gap-3"
      >
        <label htmlFor="">Title: </label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
      </div>
      <div
        style={{ marginTop: "1rem" }}
        className="d-flex align-items-center gap-3"
      >
        <label htmlFor="">Author: </label>
        <input
          className="form-control"
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
      </div>
      <div
        style={{ marginTop: "1rem" }}
        className="d-flex align-items-center gap-3"
      >
        <label htmlFor="">Price: </label>
        <input
          className="form-control"
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          required
        />
      </div>
      <div
        style={{ marginTop: "1rem" }}
        className="d-flex align-items-center gap-3"
      >
        <label htmlFor="">Quantity: </label>
        <input
          className="form-control"
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <button style={{ marginTop: "1rem" }}>
        {bookToBeEdit ? "Update" : "Add book"}
      </button>
      {bookToBeEdit && (
        <button
          style={{ marginTop: "1rem" }}
          onClick={onHandeCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddBook;
