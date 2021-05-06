import { createContext } from "react";

const initial_state = {
  count: 0,
};

export const myContext = createContext(initial_state);
