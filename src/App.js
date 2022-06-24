import React from 'react'
import { AuthContext, AuthProvider, TAuthConfig } from "react-oauth2-code-pkce"
import Routes from "./Routes";
import Home from './Home'

const authService = new TAuthConfig({
  clientId: 'test-client',
  authorizationEndpoint: 'http://localhost:8080/oauth2/authorize',
  redirectUri: 'http://localhost:3000/',
  tokenEndpoint: 'http://localhost:8080/oauth2/token',
  scope: 'openid',
  logoutEndpoint: '',
  logoutRedirect: '',
});

const App = props => {

  return (

      <AuthProvider authService={authService} >
        <Home />
      </AuthProvider>

  );
}

export default App;
