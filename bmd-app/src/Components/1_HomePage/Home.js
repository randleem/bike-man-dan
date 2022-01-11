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
          Your local mobile bicycle maintenance and repair service proudly serving cyclists in and around Birmingham since 2011.
          </p>
        </div>
      </div>
      <h1>{emma} is the best</h1>
      <button onClick={setEmmaName}>Get Contacts</button>
    </div>
  );
}

export default Home;
