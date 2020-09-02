import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Amazon Clone</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
