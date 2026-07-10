import { useState } from "react";
import Name from "../component/Name";
import Name2 from "../component/Name2";

const Toggle_components = () => {
  const [Display, setDisplay] = useState(true);
  const [Count, setCount] = useState(0);
  return (
    <div>
      <button className="border" onClick={() => setDisplay(!Display)}>
        Toggle
      </button>
      {Display ? <Name /> : <Name2 />}

      {/* Dealing with multiple conditions */}
      <button onClick={() => setCount(Count + 1)}>increase {Count}</button>
      {
        Count === 0  ? <p>the value is zero </p>
        : Count > 0  && Count <= 10  ? <p>Value is less then 10 </p>
        : Count > 10 && Count <= 15  ? <p>value grater then 10 </p> 
        : Count > 15 ? <p>value too large </p>
        : <p>null</p>
      }
    </div>
  );
};

export default Toggle_components;
