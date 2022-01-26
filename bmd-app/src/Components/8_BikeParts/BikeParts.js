import React from "react";
import BikeAZ from "../BikeAZ/BikeAZ";

import "./BikeParts.css";

function BikeParts() {
  return (
    <div className="bike-parts-container">
      <h1 className="bike-parts-title">Bike Parts</h1>
      <h3>
        Welcome to the Bike A-Z. Here are some handy tips and explanations about
        the different parts of a bike and problems your bike may have.
      </h3>
      <div className="bike-parts-content">
        <BikeAZ
          title="Cassette"
          text="Everythig you need to know about Cassettes"
          src="https://www.ribblecycles.co.uk/media/wysiwyg/shimcass931_1_zoom.jpg"
          alt="bike cassette"
          link="https://bikemandan.co.uk"
        />
        <BikeAZ
          title="Chains"
          text="Everythig you need to know about Cassettes"
          src="https://cdn.media.halfords.com/i/washford/907535/SRAM-PC850-Bike-Chain---8-Speed.webp?$sfcc_tile_featured$&w=884"
          alt="bike chain"
          link="https://bikemandan.co.uk"
        />
      </div>
    </div>
  );
}

export default BikeParts;
