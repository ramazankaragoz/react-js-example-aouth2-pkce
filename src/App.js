import React from 'react'
import { AuthProvider, AuthService } from 'react-oauth2-pkce'
import RouteApp from "./RouteApp";



const authService = new AuthService({
    clientId: 'test-client',
    location: window.location,
    provider: 'http://localhost:8080/oauth2/token',
    redirectUri: window.location.origin,
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

const App = props => {

    return (

        <AuthProvider authConfig={authService}>
            <RouteApp />
        </AuthProvider>

    );
}

export default App;
