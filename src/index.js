import React from "react";
import ReactDOM from "react-dom";
import FieldList from "./Components/FieldList";
import films from "./Helpers/FilmsData";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FieldList films={films} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
