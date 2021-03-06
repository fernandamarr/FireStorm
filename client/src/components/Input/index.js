import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" style={{"height": "50px"}} {...props} />
        </div>
    );
}


export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10, marginRight: 5 }} className="btn btn-warning" type="submit">
            {props.children}
        </button>
    );
}