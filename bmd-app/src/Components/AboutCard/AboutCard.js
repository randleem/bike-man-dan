import React from "react";
import "./AboutCard.css";

function AboutCard({ title, className, body }) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <div className="card-image-parent">
          <i className={className}></i>
        </div>
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default AboutCard;
