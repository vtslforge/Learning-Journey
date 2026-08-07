// import { useState } from "react";

// const Transition = () => {
//   async function handleClick() {
//     setpending(true);
//     await new Promise((res) => setTimeout(res, 3000));
//     setpending(false);
//     console.log("hello");
//   }

//   const [pending, setpending] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         disabled={pending}
//         className="border bg-amber-300"
//       >
//         click me
//       </button>
//     </div>
//   );
// };

// export default Transition;

// instead

import { useState, useTransition } from "react";

const Transition = () => {
  const [text, setText] = useState("");
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 3000));
      setText("Hello React!");
    });
  };

  return (
    <div>
      <button
        disabled={pending}
        onClick={handleClick}
        className="border bg-amber-300"
      >
        {pending ? "Loading..." : "Click Me"}
      </button>

      <h1>{text}</h1>
    </div>
  );
};

export default Transition;
