import React from "react";
import "./About.css";
import AboutCard from "../AboutCard/AboutCard";

function About() {
  return (
    <div id="about" className="about-container ">
      <div className="about-introduction">
        <h3>Bike Man Dan gets your two wheels back on the road</h3>
        <div className="about-card-parent-container">
          <div className="about-card-container central-container">
            <AboutCard
              title="Step 1"
              className="fas fa-wrench"
              body="Book a collection from home or work quickly. Evening collections are available. (Book now)"
            />
            <AboutCard
              title="Step 2"
              className="fas fa-bicycle"
              body="Your bike will be assessed and serviced by experienced, qualified mechanics. (See link to Cytech qualification)"
            />
            <AboutCard
              title="Step 3"
              className="fas fa-shuttle-van"
              body="We’ll bring your bike back in tip-top condition, ready to ride. 7 Days later ** (see disclaimer!)"
            />
            <AboutCard
              title="Guarantee"
              className="fas fa-award"
              body="From booking to payment, we communicate clearly and are fully transaparent about all costs involved."

              //   body="Our system is very easy to use, from booking to payment and we communicate clearly with you about any issues with your bike, are upfront about all costs involved and offer as much advise as possible on how to keep it well maintained and save money!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
