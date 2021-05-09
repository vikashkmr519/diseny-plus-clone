import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Series from "./components/Series";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/series">
            <Series />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
