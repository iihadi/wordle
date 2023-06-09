import { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { defaultBoard } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <div className="App">
      <nav>Wordle</nav>
      <AppContext.Provider value={{board, setBoard}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
