import * as React from "react";
import "../styles/panels.css";
import GetList from "./getList";

export default function Panels() {
  return (
    <div className="container">
      <div className="skift big">
        <h1>Dag</h1>
        <div className="dag">
          <GetList />
        </div>
      </div>
      <div className="skift small">
        <h1>Aften</h1>
        <div className="aften">
          <GetList />
        </div>
      </div>
      <div className="skift small">
        <h1>Nat</h1>
        <div className="nat">
          <GetList />
        </div>
      </div>
    </div>
  );
}
