import React from 'react'
import { AuthProvider, AuthService } from 'react-oauth2-pkce'

import RouteApp from "./RouteApp";



const authService = new AuthService({
    clientId: 'test-client',
    location: window.location,
    provider: 'http://127.0.0.1:8080/oauth2',
    tokenEndpoint:'http://127.0.0.1:8080/oauth2/token',
    authorizeEndpoint:'http://127.0.0.1:8080/oauth2/authorize',
    redirectUri: 'http://127.0.0.1:3000',
    scopes: ['openid']
});

/*const authConfig = new Object({
    clientId: 'test-client',
    authorizationEndpoint: 'http://localhost:8080/oauth2/authorization/keycloak-idp',
    redirectUri: 'http://localhost:8080/callback',
    tokenEndpoint: 'http://localhost:8080/oauth2/token',
    scope: 'openid',
    logoutEndpoint: '',
    logoutRedirect: '',
    decodeToken: true,
    //preLogin: () => localStorage.setItem('preLoginPath', location.pathname),
    //postLogin: () => location.replace(localStorage.getItem('preLoginPath')),
});*/

const App = () => {

    return (

        <AuthProvider authService={authService} >
            <RouteApp />
        </AuthProvider>

    )
}

export default App;
