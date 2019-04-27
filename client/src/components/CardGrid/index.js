import React from "react";
import "./style.css";
// import { createReadStream } from "fs";

// Exporting the Container, Row, Col, and Thumbnailcomponents from this file

export function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="DevMember Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({size, children}) {
  return (
    <div id="dev-col"
      className = {size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
