import { useState } from "react";

//--------------------------------------------------------------------------------------
// digit Counter
const Digit_counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>Digit counter</p>
      <p>{count}</p>
      <button className="border" onClick={() => setCount(prev => prev + 1)}>increase</button>
      <button className="border" onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>decrease</button>
      <button className="border" onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Digit_counter;
