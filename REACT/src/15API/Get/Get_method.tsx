// import { Fragment, useEffect, useState } from "react";

// const Get_method = () => {
//   const [userData, setuserData] = useState<any>();

//   useEffect(() => {
//     async function getData() {
//       const url = "https://dummyjson.com/users";
//       let response = await fetch(url);
//       let data = await response.json();
//       setuserData(data.users);
//     }
//     getData();
//   }, []);
//   return (
//     <div>
//       {userData?.map((user: any, index: any) => (
//         <Fragment key={index}>
//           <p>{user.firstName}</p>
//         </Fragment>
//       ))}
//     </div>
//   );
// };

// export default Get_method;
