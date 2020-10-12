import React from "react";

export default function Loading({ active }) {
  if (active)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
          opacity: 0.5,
        }}
      >
        Loading ...
      </div>
    );
  else return null;
}
