import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = `Counter : ${counter}`;
  }, [counter]);

  return (
    <div>
      <h2>Counter : {counter}</h2>

      <button onClick={handleCounter}>Increase</button>
    </div>
  );
};

export default Counter;
