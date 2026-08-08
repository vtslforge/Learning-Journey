import { useState } from "react";

const Object = () => {
  const [studentdb, setStudentdb] = useState({
    name: "Aryan singh",
    class: "12th",
    marks: {
      maths: "65",
      history: "99",
      biology: "53",
    },
  });

  const handleNameChange = () => {
    setStudentdb({ ...studentdb, name: "Aman Singh" }); // Copy all existing properties from the old studentdb object Replace only the name property
  };
  const handleClassChange = () => {
    // this ...studentdb Copy the old object so name, marks, etc. are preserved  lass: "12th Section-B" Replace only the class property
    setStudentdb({ ...studentdb, class: "12th Section-B" }); // Without ...studentdb, the new object would contain ONLY "class"  and the existing name and marks would be lost.
  };

  const handleMarksMathsChange =()=>{
    setStudentdb({...studentdb,marks:{...studentdb.marks,maths:"77 updated marks"}})
  }

//   const handleHistoryMarks =()=>{
//     setStudentdb({...studentdb,marks:{...studentdb.marks,history:"89 updated marks"}})
//   }

  const batchMarksUpdate =()=>{   // batch updating is better because state updates are queued/batched, not immediately applied to the variable you're currently holding.
    setStudentdb({...studentdb,marks:{...studentdb.marks,maths:"100",history:"100"}})
  }
  return (
    <div>
      <button
        onClick={() => {
          handleNameChange();
          handleClassChange();
          handleMarksMathsChange();
          batchMarksUpdate();
        }}
        className="border"
      >
        change name, class
      </button>
      <p>student management</p>
      <p>{studentdb.name} Name</p>
      <p>{studentdb.class} class</p>
      <p>{studentdb.marks.biology} biology</p>
      <p>{studentdb.marks.history} history</p>
      <p>{studentdb.marks.maths} maths</p>
    </div>
  );
};

export default Object;
