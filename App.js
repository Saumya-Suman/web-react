// const parent= React.createElement( //object --> means it is a react element
//     "div", {id: "parent" }, // pass  attributes
//     [ React.createElement("div", {id: "child1" }, [
//      React.createElement("h1", {}, "I'm an h1 tag"),   //children you have  to pass 
//        React.createElement("h2", {}, "I'm an h2 tag"), 
//    ]),  

//     React.createElement("div", {id:"child2"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2",  {}, "I'm an h2 tag"),
//         ]),
    
// ]);

const parent2 = React.createElement("div", {id:"parent"}, [
React.createElement("div",  {id:"child1"}, [
React.createElement("h1", {}, "I'm an h1 tag"),
React.createElement("h2", {}, "I'm an h2 tag"),
]),

React.createElement("div",{id:"child2"}, [
React.createElement("h1", {}, "I'm an  h1 tag"),
React.createElement("h2", {}, "I'm an  h2 tag"),
]),

]);

console.log(parent2) //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);


