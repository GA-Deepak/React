// import logo from './logo.svg';
import "./App.css";

import PostForm from "./Component/PostForm";
import Private from "./Component/Private";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostForm} />
        <Private exact path="/Dashboard"><Dashboard/></Private>
      </Switch>
    </div>
  );
}

export default App;
