import React from 'react'
import { AuthProvider, AuthService } from 'react-oauth2-pkce'

import RouteApp from "./RouteApp";



const authService = new AuthService({
    clientId: 'test-client',
    location: window.location,
    provider: 'http://localhost:8081/oauth2',
    tokenEndpoint:'http://localhost:8081/oauth2/token',
    authorizeEndpoint:'http://localhost:8081/oauth2/authorize',
    redirectUri: 'http://127.0.0.1:3000',
    scopes: ['openid']
});

const App = () => {

    return (

        <AuthProvider authService={authService} >
            <RouteApp />
        </AuthProvider>

    )
}

export default App;
