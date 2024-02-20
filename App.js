import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 className="head">
Namaste React using JSX ! 🚀
</h1>);

// React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component !</h1>;
};

const HeadingComponent2 = () => <h1>Namaste React Functional Component 2 !</h1>;

const HeadingComponent3 = () => (
    <h1 className="heading">Namaste React Functional Component 3 !</h1>
);

const HeadingComponent4 = () => (
    <div className="container">
        <h1 className="heading">Namaste React Functional Component 3 !</h1>
    </div>
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent3 />);