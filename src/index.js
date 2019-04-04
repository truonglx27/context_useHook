import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./Component/List";
import Counter from "./Component/Counter";
import { NumberProvider } from "./Context/NumberContext";
import RamdomNumber from "./Context/RamdomNumber";
const data = ["A", "B", "C"];

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RamdomNumber />
      </div>
    </NumberProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
