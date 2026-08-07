import { useState } from "react";
import Counter from "./Counter";
import PracticeEffect from "./PracticeEffect";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleCounter}>Increase Main Counter</button>

      <Counter />

      {/* Passing counter as a prop */}
      <PracticeEffect counter={counter} handleCounter={handleCounter} />

      <hr />
    </div>
  );
};

export default Main;
