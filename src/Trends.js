import React from "react";
import "./Trends.css";

function Trends({ topText, middleText, bottomText, Icon }) {
  return (
    <div className="trends">
      <div className="trends__content">
        <div className="trends__contentLeft">
          <h5>{topText}</h5>
          <h3>{middleText}</h3>
          <h5>{bottomText}</h5>
        </div>
        <p>
          <Icon />
        </p>
      </div>
    </div>
  );
}

export default Trends;
