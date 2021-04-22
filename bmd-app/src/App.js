import React from 'react';
import './App.css';

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";
import About from "./Components/2_About/About";
import Areas from "./Components/3_Areas/Areas";
import Services from "./Components/5_Services/Services";
import Prices from "./Components/6_Prices/Prices";
import BookingForm from './Components/BookingForm/BookingForm';
import Footer from './Components/Footer/Footer';

require('dotenv').config();

function App() {
  return (
    <div className='app-container'>
      <Navbar />   
      <Home id='home'/>
      <div className='central-container'>
      <About />
      <Areas />
      <Services />
      <Prices />
      <BookingForm id='booking-form'/>
      </div>
      <Footer />
    </div>
  )
}

export default App;
