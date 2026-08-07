import { useRef } from "react";
import Ref_as_prop from "./Ref_as_prop";

const SimpleRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (): void => {
    if (inputRef.current) {
      inputRef.current.value = "1000";
      inputRef.current.style.color="blue"
    }
  };

  return (
    <div>
      
      
      <Ref_as_prop inputRef={inputRef}/>
      <button onClick={handleChange}>Click</button>
    </div>
  );
};

export default SimpleRef;
