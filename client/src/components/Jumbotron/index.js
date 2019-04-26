import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", textAlign: "center", marginTop: "200px", marginBottom: "-40px" }}
      className="jumbotron bg-transparent"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
