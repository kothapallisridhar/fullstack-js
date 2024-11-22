import React from 'react';
import ReactDOM from 'react-dom/client'; 

// React Element 
// React.createElement => ReactElement - JS Object => HTMLElement(render) 

const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");

// JSX - React is different and JSX is different
// JSX makes our deveopers life easier
// JSX is html like syntax but it is not html
// JSX will be transpiled before it reaches browser - Parcel - Babel
// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render) 
// Who is converting the JSX code to React.createElement? - Babel


const jsxHeading = (<h1 className='head'>
                    Namaste React using JSX 🚀
                   </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);