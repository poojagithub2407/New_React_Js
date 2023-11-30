import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello React JS");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Heading of child 1"),
    React.createElement("h2", {}, "Heading of child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Heading of child 2"),
    React.createElement("h2", {}, "Heading of child 2")
  )
);

root.render(parent);
