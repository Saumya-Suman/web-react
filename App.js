
import React from "react";
import ReactDOM from "react-dom/client";

const parent2 = React.createElement("div", {id:"parent"}, [
React.createElement("div",  {id:"child1"}, [
React.createElement("h1", {}, "React by Saumya"),
React.createElement("h2", {}, "Learning web dev"),
]),

React.createElement("div",{id:"child2"}, [
React.createElement("h1", {}, "I'm an  h1 tag"),
React.createElement("h2", {}, "I'm an  h2 tag"),
]),

]);

console.log(parent2) //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);


