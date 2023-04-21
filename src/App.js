import React from "react";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        className="container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          paddingTop: "10px",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingBottom: "30px",
          color: "black",
          borderRadius: "13px",
          boxShadow: "1px 1px 20px rgb(104, 104, 104)",
          display: "flex",
          alignItems: "center",
          margin: "10px 0",
        }}>
        <div>
          <h1 style={{ fontSize: "50px", paddingLeft:"50px" }}>Count</h1>
          <h1 style={{ fontSize: "50px", paddingLeft: "109px" }}>{count}</h1>
          <span style={{ paddingRight: "30px" }}>
            <Button positive onClick={() => setCount(count + 1)}>Increment</Button>
          </span>
          <span>
            <Button negative onClick={() => setCount(count - 1)} disabled={!count}>Decrement</Button>
          </span>
        </div>
      </div>
      <h3 style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 200%)",
        paddingTop: "10px",
        paddingLeft: "60px",
        paddingRight: "60px",
        paddingBottom: "30px",
        color: "black",
      }}>Done by:  Ritu Priya Singh - Registration Number: 12001595</h3>

    </div>
  );
}
