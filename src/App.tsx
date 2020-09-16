import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/404";
import blog from "./components/blogs";
var prevScrollpos = window.pageYOffset;

class App extends React.Component {
  render() {
    return (
      <div className="basePage">
        <Navbar />
        {
          (window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
              const e = document.getElementById("navbar") as HTMLElement;
              e.style.top = "0";
            } else {
              const e = document.getElementById("navbar") as HTMLElement;
              e.style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
          })
        }
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blogs" component={blog} />
            <Route exact component={NotFound} />
          </Switch>
        </Router>
        <footer>© 2020 Copyright Stars Tracker</footer>
      </div>
    );
  }
}

export default App;
