import { Fragment, useEffect, useState } from "react";

const Get_m2 = () => {
  const [loading, setloading] = useState(true);
  const [userdata, setuserdata] = useState<any>();
  const [error, seterror] = useState<any>();
  useEffect(() => {
    async function getUsers() {
      try {
        setloading(true);
        const response = await fetch("http://localhost:3000/userData");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setuserdata(data);
      } catch (error) {
        seterror("failed to fetch");
      } finally {
        setloading(false);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        userdata?.map((users: any, index: any) => (
          <Fragment key={index}>
            <p>{users.id}</p>
            <p>{users.firstName}</p>
            <p>{users.age}</p>
          </Fragment>
        ))
      )}
    </div>
  );
};

export default Get_m2;
