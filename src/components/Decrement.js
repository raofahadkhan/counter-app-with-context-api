import React, { useContext } from "react";
import { myContext } from "../myContext";

const Decrement = () => {
  const { decrementCount } = useContext(myContext);
  return (
    <div>
      <button onClick={() => decrementCount()}>Decrement</button>
    </div>
  );
};

export default Decrement;
