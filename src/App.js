import { useContext } from "react";
import "./App.css";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import { GlobalProvider } from "./GlobalProvider";
import { myContext } from "./myContext";

function App() {
  const { initial_state } = useContext(myContext);
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Counter App With Context Api</h1>
        {/* <h3>{initial_state.count}</h3> */}
        <Increment />
        <Decrement />
        <Reset />
      </div>
    </GlobalProvider>
  );
}

export default App;
