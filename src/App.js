import React, { Component } from "react";
import { BrowserRouter,Switch, Route, Link, Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddYandax from "./components/add-yandax.component";
import Yandax from "./components/yandax.component";
import YandaxList from "./components/yandax-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Yandax
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/tutorials" className="nav-link">
                Yandax Data
              </a>
            </li>
            <li className="nav-item">
              <a href={"/add"} className="nav-link">
                Add
              </a>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={YandaxList} />
            <Route exact path="/add" component={AddYandax} />
            <Route path="/tutorials/:id" component={Yandax} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>

    );
  }
}

export default App;
