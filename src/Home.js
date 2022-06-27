import React from 'react';
import { useAuth } from 'react-oauth2-pkce';

const Home = props =>{

    const { authService, authTokens } = useAuth()

    const login = async () => {
        authService.authorize()
    }
    const logout = async () => {
        authService.logout()
    }

    if (authService.isPending()) {
        return <div>Loading...</div>
    }

    if (!authService.isAuthenticated()) {
        return (
            <div>
                <p>Not Logged in yet: {authTokens.idToken} </p>
                <button onClick={login}>Login</button>
            </div>
        )
    }

    return (
        <div>
            <p>Logged in! {authTokens.idToken}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )

}

export default Home;