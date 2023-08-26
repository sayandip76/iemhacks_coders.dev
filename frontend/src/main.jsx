import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import CheckVisitor from './logic/getUser.jsx';
import ConnectWallet from './logic/connectWallet.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h6dwfn0pny2sne5s.us.auth0.com"
      clientId="UCdX0gYf4D1Ifgu2i1zgyoEN6KnCQM0y" redirect_uri={window.location.origin}>
      <CheckVisitor>
        {/*<ConnectWallet>*/}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/*<ConnectWallet>*/}
      </CheckVisitor>
    </Auth0Provider>
  </React.StrictMode>,
)
