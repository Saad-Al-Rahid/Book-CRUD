import { useDispatch, useSelector } from "react-redux";
import { deleteList } from "./bookSlice";

const BookApp = ({ onHandleBook }) => {
  const bookList = useSelector((state) => state.bookA.books);
  const dispatch = useDispatch();

  return (
    <div className="container book__collection">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mt-5">Book List</h1>
          <ul>
            {bookList &&
              bookList.map((book) => {
                return (
                  <li key={book.id}>
                    {book.title} write by {book.author} - Price ${book.price} -
                    Quantity-{book.quantity}{" "}
                    <button
                      onClick={() => {
                        onHandleBook(book);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteList(book.id));
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookApp;
