import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", marginTop: "100px" }}
      className="jumbotron bg-transparent"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
