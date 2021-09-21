import React from "react";

//TODO: style to be removed
// import "./../styles.css";
import Archive from "./Archive";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";

function App() {
  return (
    <div className="m-0">
      <Router>
        <Navbar />
        <hr />
        <Sidebar />
        <div className="ml-16">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/search" component={SearchBar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
