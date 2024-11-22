
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByValue, increment, reset } from "./counterSlice";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="container mb-5 p-3" style={{ background: "pink" }}>
      <h1 className="text-center">Counter App</h1>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseByValue(5));
        }}
      >
        Add5
      </button>
    </div>
  );
};

export default CounterApp;
