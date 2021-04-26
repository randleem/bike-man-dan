import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
require('dotenv').config();

ReactDOM.render(
  <Auth0Provider
    domain="dev-s3zmkyhk.eu.auth0.com"
    clientId="SMbG98pi8r4PXPyy679fhdvjC0SamhxF"
    redirectUri={"http://localhost:3000/customer"}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>,
  document.getElementById('root')
);


