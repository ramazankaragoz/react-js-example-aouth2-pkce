import React, {useEffect} from 'react';
import {useAuth} from 'react-oauth2-pkce';

const Home = props => {

    const {authService} = useAuth()

    const login = async () => {
        authService.authorize();
    }

    const logout = async () => {
        authService.logout();
    }

    if (authService.isPending()) {
        return <div>Loading...</div>
    }

    if (!authService.isAuthenticated()) {
        return (
            <div>
                <p>Not Logged in yet.. Please click login for aurhorize..</p>
                <button onClick={login}>Login</button>
            </div>
        )
    }else{
        console.log("Authenticated..");
    }

    return (
        <div>
            <p>Logged in {authService.getUser().name} !</p>
            <br/>
            <p>Email: {authService.getUser().email}</p>
            <p>Expire: {authService.getUser().exp}</p>
            <br/>
            <p>Access Token:</p>
            <p>{authService.getAuthTokens().access_token}</p>
            <br/>
            <button onClick={logout}>Logout</button>
        </div>
    )


}

export default Home;