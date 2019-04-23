import React from "react";



function SignUpBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-dark" type="submit">
      {props.children}
    </button>
  );
}

export default SignUpBtn;
