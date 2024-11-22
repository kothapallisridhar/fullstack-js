import React from 'react';
import ReactDOM from 'react-dom/client'; 

// React Element 
// React.createElement => ReactElement - JS Object => HTMLElement(render) 

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");

// JSX - React is different and JSX is different
// JSX makes our deveopers life easier
// JSX is html like syntax but it is not html
// JSX will be transpiled before it reaches browser - Parcel - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render) 
// Who is converting the JSX code to React.createElement? - Babel


const heading = (<h1 className='head'>
                    Namaste React using JSX 🚀
                   </h1>);


// React Component
// Class Based Component - OLD 
// Functional Component - NEW

// React Functional Component is just a normal function which returns a JSX

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);