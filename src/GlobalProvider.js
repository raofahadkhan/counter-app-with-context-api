import React, { useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
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
      <div className="App">
        <h1>Counter App With Context Api</h1>
        <h3>{state.count}</h3>
        <Increment />
        <Decrement />
        <Reset />
      </div>
    </myContext.Provider>
  );
};
