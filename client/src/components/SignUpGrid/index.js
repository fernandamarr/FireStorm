import React from "react";

const aesthetic= {
    backgroundImage: 'linear-gradient(to top left, rgb(66, 223, 244), rgb(9, 36, 237), rgb(129, 1, 193), rgb(151, 1, 193), rgb(193, 1, 186))',
    height: "800px"
}
const warriorImg = {
    backgroundImage: 'url(https://art.ngfiles.com/images/695000/695547_michafrario_super-pocket-fighter-nova.gif?f1543967599)',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'initial'
}
// Exporting the Container, Row, and Col components from this file
export const Container = ({children })=> {
    return <div  className="container-fluid" style={aesthetic}>{children}</div>;
}

// This Container component allows us to use a bootstrap container without worrying about class names
export const Row = ({ children }) => {
    return <div  className="row" style={warriorImg} >{children} </div>;
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