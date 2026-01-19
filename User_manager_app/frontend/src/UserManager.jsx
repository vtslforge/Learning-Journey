import React, { useEffect, useState } from "react";

const UserManager = () => {
  const [intern, setintern] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/user-data")
      .then((res) => res.json())
      .then((data) => setintern(data.fullTimeEmployee));
  }, []);

  return (
    <div>
      <div className="flex rounded-3xl flex-col text-white box-border space-y-10 p-9">
        <h1 className="text-6xl">Data</h1>
        <div className="space-y-5 flex flex-wrap gap-3">
          {intern.map((person) => (
            <div className=" p-3 bg-amber-200 rounded-2xl text-black" key={person.id}>
              <p className="">Name: {person.name}</p>
              <p className="">Role: {person.role}</p>
              <p className="">Department: {person.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManager;
