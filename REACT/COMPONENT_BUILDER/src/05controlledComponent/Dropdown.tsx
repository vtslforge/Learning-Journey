import { useState } from "react";

const Dropdown = () => {
  const [city, setcity] = useState("");
  return (
    <div>
      <select
        onChange={(e) => setcity(e.target.value)}
        className="border"
        name="select"
        id=""
        defaultValue={"bhutan"}
      >
        <option value="india">india</option>
        <option value="nepal">nepal</option>
        <option value="bhutan">bhutan</option>
      </select>
      <p>selected country : {city}</p>
    </div>
  );
};

export default Dropdown;
