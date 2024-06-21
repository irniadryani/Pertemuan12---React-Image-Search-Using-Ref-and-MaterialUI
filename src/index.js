import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import file CSS untuk styling

const navbar = (
  <div className="navbar">
    <div className="left">
      <h1>BOOTCAMP Batch 1: Experiment</h1>
    </div>
    <div className="right">
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </div>
);

const element = <h1>This is React</h1>;

ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(navbar, document.getElementById("navbar"));
