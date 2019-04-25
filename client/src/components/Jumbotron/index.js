import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center", marginTop: "250px" }}
      className="jumbotron bg-transparent"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
