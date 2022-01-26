import React from "react";

import "./BikeAZ.css";

function BikeAZ(props) {
  return (
    <div className="bike-az-container">
      <a href={props.link}>
        <h2 className="bike-parts-title">{props.title}</h2>
        <img className="bike-az-image" src={props.src} alt={props.alt} />

        {/* <p className="bike-parts-text">{props.text}</p> */}
      </a>
    </div>
  );
}

export default BikeAZ;
