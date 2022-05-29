import React from "react";
import ReactDOM from "react-dom";
// import "../scss/app.scss";

const App = () => {
  return (
    <div className="App">
      <form>
        <h1>React input validation</h1>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <input type="text" name="username" placeholder="username"></input>
        <input type="submit" value="Submit" className="submit"></input>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
