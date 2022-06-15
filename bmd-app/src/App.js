import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";
// import About from "./Components/2_About/About";
// import Areas from "./Components/3_Areas/Areas";
// import Services from "./Components/5_Services/Services";
// import Prices from "./Components/6_Prices/Prices";
// import BookingForm from "./Components/BookingForm/BookingForm";
import Footer from "./Components/Footer/Footer";
import CustomerPage from "./Components/7_CustomerPage/CustomerPage";
import BikeParts from "./Components/8_BikeParts/BikeParts";
import BookingPage from "./Components/9_BookingPage/BookingPage";
require("dotenv").config();

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="bike-parts" element={<BikeParts />} />
          <Route path="booking-form" element={<BookingPage />} />
          <Route path="customer" element={<CustomerPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

// <div className="central-container">
// <About />
// <Areas />
// <Services />
// <Prices />
// <BookingForm id="booking-form" />
// </div>

export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-dom";

// //Components
// import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Components/1_HomePage/Home";
// import About from "./Components/2_About/About";
// import Areas from "./Components/3_Areas/Areas";
// import Services from "./Components/5_Services/Services";
// import Prices from "./Components/6_Prices/Prices";
// import BookingForm from "./Components/BookingForm/BookingForm";
// import Footer from "./Components/Footer/Footer";
// import CustomerPage from "./Components/7_CustomerPage/CustomerPage";
// import BikeParts from "./Components/8_BikeParts/BikeParts";
// import BookingPage from "./Components/9_BookingPage/BookingPage";

// require("dotenv").config();

// function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <Router>
//         <Switch>
//           <Route path="/booking-form">
//             <BookingPage />
//           </Route>
//           <Route path="/bike-parts">
//             <BikeParts />
//           </Route>
//           <Route path="/customer">
//             <CustomerPage />
//           </Route>
//           <Route path="/">
//             <Home id="home" />
//             <div className="central-container">
//               <About />

//               <Areas />
//               <Services />
//               <Prices />
//               <BookingForm id="booking-form" />
//             </div>
//           </Route>
//         </Switch>
//       </Router>
//       <Footer />
//     </div>
//   );
// }

// export default App;
