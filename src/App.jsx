import { useState } from "react";
import CounterApp from "./counter/CounterApp";
import { Provider } from "react-redux";
import store from "./store";
import BookApp from "./book/BookApp";
import AddBook from "./book/AddBook";

const App = () => {
  const [bookToBeEdit, setBookToBeEdit] = useState(null);

  const handleBook = (editBook) => {
    setBookToBeEdit(editBook);
  };

  const handleCancel = () => {
    setBookToBeEdit(null);
  };

  return (
    <Provider store={store}>
      <CounterApp />
      <AddBook bookToBeEdit={bookToBeEdit} onHandeCancel={handleCancel} />
      <BookApp onHandleBook={handleBook} />
    </Provider>
  );
};

export default App;
