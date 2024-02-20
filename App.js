import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>(React Element 2) | </span>

// React Component
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX (React Component) ! 🚀
    </h1>
);

// React Element 
const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX (React Element 1) ! 🚀
    </h1>
);

const number = 770;

// Component Composition
const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>{number + 7}</h1>
        <Title />
        <h1 className="heading">Namaste React Functional Component !</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);