//rfec - shortcut
import React, { useState } from "react";
import "./Home.css";
// Components
import HeroBanner from "../HeroBanner/HeroBanner";

function Home() {
  const [emma, setEmma] = useState("Dan");

  function setEmmaName() {
    setEmma("Emma");
  }
  return (
    <div>
      <HeroBanner />
      <div className="home-container">
        <div className="home-text">
          <p>
            Hi, my name is Dan, your local mobile bicycle mechanic, I have been
            proudly serving cyclists in Birmingham and surrounding areas since
            2011
          </p>
        </div>
      </div>
      <h1>{emma} is the best</h1>
      <button onClick={setEmmaName}>Get Contacts</button>
    </div>
  );
}

export default Home;
