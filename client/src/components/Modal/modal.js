import React from "react";

export function Modal(children) {
    return (
        <div className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                {children}
                </div>
            </div>
        </div>
    )
}