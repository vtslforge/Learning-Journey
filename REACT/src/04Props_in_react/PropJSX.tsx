import type { ReactNode } from "react";

type PropJSXProps = {
  children: ReactNode;
};

const PropJSX = ({ children }: PropJSXProps) => {
  return (
    <div>
      <p style={{ border: "5px solid blue", color: "green" }}>
        {children}
      </p>
    </div>
  );
};

export default PropJSX;