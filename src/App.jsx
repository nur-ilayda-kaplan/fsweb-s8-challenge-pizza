import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route exact patch="/"></Route>
        <Route patch="/Home"></Route>
        <Route patch="/Order"></Route>
        <Route patch="/Success"></Route>
      </Switch>
    </>
  );
}

export default App;
