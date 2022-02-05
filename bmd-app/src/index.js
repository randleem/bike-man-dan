import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BikeParts from "./Components/8_BikeParts/BikeParts";
import BookingPage from "./Components/9_BookingPage/BookingPage";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();

ReactDOM.render(
  <Auth0Provider
    domain="dev-s3zmkyhk.eu.auth0.com"
    clientId="SMbG98pi8r4PXPyy679fhdvjC0SamhxF"
    redirectUri={"http://localhost:3000/customer"}
  >
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="bike-parts" element={<BikeParts />} />
            <Route path="booking-form" element={<BookingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById("root")
);
