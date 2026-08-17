import { useReducer } from "react";

const Counter = () => {
  function reducer(state: number, action: any) {
    switch (action.type) {
      case "increase":
        return state + 1;

      case "decrease":
        return state - 1;

      case "reset":
        return 0;

      case "increaseBy10":
        return state + 10;

      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
      <button onClick={() => dispatch({ type: "increaseBy10" })}>+10</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
