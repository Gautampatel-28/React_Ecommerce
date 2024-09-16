import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="your-auth0-domain"
      clientId="your-auth0-client-id"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/React_Ecommerce/`
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
