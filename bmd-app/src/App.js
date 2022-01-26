import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";
import About from "./Components/2_About/About";
import Areas from "./Components/3_Areas/Areas";
import Services from "./Components/5_Services/Services";
import Prices from "./Components/6_Prices/Prices";
import BookingForm from "./Components/BookingForm/BookingForm";
import Footer from "./Components/Footer/Footer";
import CustomerPage from "./Components/7_CustomerPage/CustomerPage";
import BikeParts from "./Components/8_BikeParts/BikeParts";

require("dotenv").config();

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/bike-parts">
            <BikeParts />
          </Route>
          <Route path="/customer">
            <CustomerPage />
          </Route>
          <Route path="/">
            <Home id="home" />
            <div className="central-container">
              <About />
              <Areas />
              <Services />
              <Prices />
              <BookingForm id="booking-form" />
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
