import React from 'react';
import './App.css';

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";
import Areas from "./Components/3_Areas/Areas";
import BookingForm from './Components/BookingForm/BookingForm';
import Footer from './Components/Footer/Footer';

require('dotenv').config();

function App() {
  return (
    <div>
      <Navbar />   
      <Home id='home'/>
      <Areas />
      <BookingForm id='booking-form'/>
      <Footer />
    </div>
  )
}

export default App;
