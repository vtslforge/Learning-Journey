import { useState } from "react";

// taking argument from the user to print the username
const Jsx_exercise = () => {
  const [userName, setUserName] = useState("unknown");
  return (
    <div className="p-3">
      <p>This is the student portal details</p>
      <button onClick={() => setUserName("Aman Singh")} className="border">
        Click to show the name
      </button>
      <p>{userName}</p>
    </div>
  );
};

export default Jsx_exercise;
