import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        zIndex: 10,
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
}
