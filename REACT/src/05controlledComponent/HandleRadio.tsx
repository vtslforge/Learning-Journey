import { useState } from "react";

const HandleRadio = () => {
  const [gender, setGender] = useState("Not specified");

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <h2>Handle Radio Button</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleRadio}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleRadio}
        />
        Female
      </label>

      <h3>Selected Gender: {gender}</h3>
    </div>
  );
};

export default HandleRadio;
