import { useState } from "react";

const Toggle_color_btn = () => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <p>Machine Output</p>
      <p className={status ? "text-amber-300" : "text-red-700"}>
        Machine is {status ? "ON" : "OFF"}
      </p>
      <button className="border" onClick={() => setStatus((prev) => !prev)}>
        Toggle
      </button>
    </div>
  );
};

export default Toggle_color_btn;
