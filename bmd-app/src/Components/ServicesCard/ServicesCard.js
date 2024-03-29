import React, { useState } from "react";
import "./ServicesCard.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

function ServicesCard({
  title,
  imageURL,
  summary,
  imageAlt,
  backgroundColor,
  fontColor,
  detail,
}) {
  const [fullDetail, setFullDetail] = useState(false);

  return (
    <div className="services-card-container-parent">
      <div
        className="services-card-container"
        style={{ background: backgroundColor, color: fontColor }}
      >
        <div className="services-card-image">
          <img src={imageURL} alt={imageAlt} />
        </div>
        <div className="services-card-content">
          <div className="services-card-title">
            <h2>{title}</h2>
          </div>
          <div className="services-card-summary">
            <p>{summary}</p>
          </div>
        </div>
        <div className="services-card-more-info-button">
          <button onClick={() => setFullDetail(true)}>More Info</button>
        </div>
      </div>
      <Modal
        isOpen={fullDetail}
        onRequestClose={() => setFullDetail(false)}
        contentLabel="modal"
        // className="modal"
        style={{
          overlay: {
            backgroundColor: "rgba(31, 111, 66, 0.5)",
            width: "100vw",
          },
          content: {
            color: "black",
            borderRadius: "20px",
            // width: "90vw",
          },
        }}
      >
        <button
          className="services-card-modal-close"
          onClick={() => setFullDetail(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <h2>{title}</h2>
        <p>{detail}</p>
      </Modal>
    </div>
  );
}

export default ServicesCard;
