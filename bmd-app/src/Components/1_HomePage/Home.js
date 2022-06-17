//rfec - shortcut
import React, { useState } from "react";
import "./Home.css";
// Components
import HeroBanner from "../HeroBanner/HeroBanner";
import About from "../2_About/About";
import Areas from "../3_Areas/Areas";
import Services from "../5_Services/Services";
import Prices from "../6_Prices/Prices";
import BookingForm from "../BookingForm/BookingForm";

function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="home-container"></div>
      <About />
      {/* <Areas /> */}
      <Services />
      <Prices />
      <BookingForm id="booking-form" />
    </div>
  );
}

export default Home;
