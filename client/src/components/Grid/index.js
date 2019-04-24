import React from "react";

let backC ={
    backgroundColor: 'white'
}
// Exporting the Container, Row, and Col components from this file
export const Container = ({fluid, children}) => {
    return <div className={`container${fluid ? "-fluid" : ""} `} style={backC}>{children}</div>;
}

// This Container component allows us to use a bootstrap container without worrying about class names
export const Row = ({fluid, children}) => {
    return <div className= {`row${fluid ? "-fluid": ""}`}>{children}</div>;
}


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export const Col = ({size, children}) => {
    return (
        <div 
        className = {size
        .split(" ")
    .map(size=> "col-" + size)
    .join(" ")}
    >
    {children}
    </div>
    );
}