import { useEffect, useState } from "react";

const Apitesting = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch("http://localhost:3001/psql");
        const getData = await response.json();
        setUsername(getData.username);
      } catch (err) {
        console.log(err);
      }
      data();
    }
    data();
  }, []);

  return (
    <div className="p-100">
      <p>{username}</p>
    </div>
  );
};

export default Apitesting;
