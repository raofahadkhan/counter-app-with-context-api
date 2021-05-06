import React, { useContext } from "react";
import { myContext } from "../myContext";

const Reset = () => {
  const { resetCount } = useContext(myContext);
  return (
    <div>
      <button onClick={() => resetCount()}>Reset</button>
    </div>
  );
};

export default Reset;
