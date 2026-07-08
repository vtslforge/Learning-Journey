import { useState } from "react";

const Live_name_input = () => {
  const [Input, setInput] = useState("guest");
  return (
    <div className="p-10">
      <input
        className="border"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <p className={Input === "guest" ? "text-gray-700" : "text-green-600"}>
        Hello, {Input.length <= 20 ? Input : "Character too Long"}
      </p>
      <p>Character count is {Input.length}</p>
    </div>
  );
};

export default Live_name_input;
