import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", textAlign: "center", marginTop: "100px", marginBottom: "-10px" }}
      className="jumbotron bg-transparent"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
