import React, { useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { myContext } from "./myContext";
import { DECREMENT, INCREMENT, RESET } from "./types";

export const GlobalProvider = ({ children }) => {
  const initial_state = useContext(myContext);

  const [state, dispatch] = useReducer(AppReducer, initial_state);

  const incrementCount = () => dispatch({ type: INCREMENT });

  const decrementCount = () => dispatch({ type: DECREMENT });

  const resetCount = () => dispatch({ type: RESET });

  return (
    <myContext.Provider
      value={{
        count: state.count,
        incrementCount,
        decrementCount,
        resetCount,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
