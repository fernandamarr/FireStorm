import React from "react";




export const Modal = ({ children }) => {
    return (
        <div  className="modal" tabindex="-1" role="dialog" aria-labelledby="..." aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const Header = ({ children }) => {

    return (
        <div className="modal-header" >
            {children}
        </div>

    );
}

export const modalBody = ({children}) => {
    return(
        <div className="modal-body">
            {children}
        </div>
    );
}