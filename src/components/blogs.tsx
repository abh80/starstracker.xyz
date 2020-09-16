import React, { Component } from "react";
import MarkdownView from "react-showdown";
import "./blog.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const blogs = [
  {
    name: "frontPage",
    
  }
]
export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blogPage">
        <Router>
          <Switch>
            {blogs.map((blog) => {
              return (
                <Route exact path={"/" + blog.name}>
                  <h1>kek</h1>
                </Route>
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}
function GenerateBlog(markdown) {
  return (
    <div className="blogComponent">
      <MarkdownView markdown={markdown} />
    </div>
  );
}
function fetchBlog(path) {
  return fetch("")
    .then((res) => res.text())
    .then((res) => res);
}
