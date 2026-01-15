import React, {useEffect , useState} from "react";


const UserManager = () => {

    const [intern, setintern] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/user-data")
    .then(res => res.json())
    .then(data => setintern(data.intern));


  },[])


  return (
    <div>
      <div className="flex rounded-3xl flex-col text-white box-border space-y-10">
        <h1 className="text-6xl">Data</h1>
        <div>
            <p>{intern?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
