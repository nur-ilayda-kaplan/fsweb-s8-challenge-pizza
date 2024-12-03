import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./companents/Home.jsx";
import Order from "./companents/Order.jsx";
import Success from "./companents/Success.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
