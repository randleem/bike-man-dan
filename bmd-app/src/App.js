import React from 'react';
import './App.css';

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";
import About from "./Components/2_About/About";
import Areas from "./Components/3_Areas/Areas";
import Services from "./Components/5_Services/Services";
import BookingForm from './Components/BookingForm/BookingForm';
import Footer from './Components/Footer/Footer';

require('dotenv').config();

function App() {
  return (
    <div>
      <Navbar />   
      <Home id='home'/>
      <About />
      <Areas />
      <Services />
      <BookingForm id='booking-form'/>
      <Footer />
    </div>
  )
}

export default App;
