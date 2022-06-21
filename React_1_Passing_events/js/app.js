import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";

const App = () => {
  return (
    <div className="App">
      <Parent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
