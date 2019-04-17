import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChatBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info chatBtn">
      {props.children}
    </button>
  );
}

export default ChatBtn;