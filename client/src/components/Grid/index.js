import React from "react";

let aesthBack = {
    backgroundImage: 'url(https://res.cloudinary.com/teepublic/image/private/s--tNAQHHJg--/t_Preview/b_rgb:040016,c_limit,f_jpg,h_630,q_90,w_630/v1533186521/production/designs/2968262_0.jpg',
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat',
    backgroundSize: 'init',
    height: '950px' ,
    
}

let colorAe = {
    backgroundColor: 'rgb(4,0,16)',
    
}


// Exporting the Container, Row, and Col components from this file
export const Container = ({children}) => {
    return <div className="container-fluid " style={colorAe} >{children}</div>;
}

// This Container component allows us to use a bootstrap container without worrying about class names
export const Row = ({children}) => {
    return <div className= "row "style={aesthBack}  >{children}</div>;
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