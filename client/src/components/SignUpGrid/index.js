import React from "react";
let aesthetic = {
    backgroundImage: 'linear-gradient(to bottom right, red, yellow)',
    height: '900px'
}
// Exporting the Container, Row, and Col components from this file
export const Container = ({children })=> {
    return <div className="container-fluid"style={aesthetic} >{children}</div>;
}

// This Container component allows us to use a bootstrap container without worrying about class names
export const Row = ({ children }) => {
    return <div className="row">{children}</div>;
}


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export const Col = ({ size, children }) => {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}