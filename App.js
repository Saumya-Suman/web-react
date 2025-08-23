
import React from "react";
import ReactDOM from "react-dom/client";

/* Foundation like writing react code from scratch. creating heading through core react

const heading = React.createElement(
    "h1", {id:"heading"}, "Web dev React"
); 

console.log(heading); */

/* Creating heading through jsx -- easy way

const jsxHeading = <h1 id="heading">Learning React Deeply</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(jsxHeading); */

/* creating FunctionalComponents */

const Title = () => (
  <h1 className="head" tabIndex="5">
     React using JSX 🚀
  </h1>
); 


//React fragment behaves like an empty tag
//React Functional Component -- Component composition
const HeadingComponent = () => 
<>
 <div id = "container">
<Title/>
<h1 className="heading">React in Functional Component</h1>
</div>
<div id="container2"> </div>
</>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);



