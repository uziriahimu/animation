import React from "react";
import "./name.css";

function App() {
  const name = "Uziria himu";
  const nameArr = name.split("");
  return (
    <div className="main">
      <div className="container">
        {nameArr.map((item, i) => (
          <span
            className="alphabate"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
