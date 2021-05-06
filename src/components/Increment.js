import React, { useContext } from "react";
import { myContext } from "../myContext";

const Increment = () => {
  const { incrementCount } = useContext(myContext);
  return (
    <div>
      <button onClick={() => incrementCount}>Increment</button>
    </div>
  );
};

export default Increment;
