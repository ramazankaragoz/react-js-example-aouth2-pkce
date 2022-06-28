import React from 'react';
import { useAuth } from 'react-oauth2-pkce';

const Home = props =>{

    const { authService} = useAuth()

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
    }else {

        let user=authService.getUser();
        return (
            <div>
                <p>Logged in {user.name} !</p>
                <br/>
                <p>Email: {user.email}</p>
                <p>Expire: {user.exp}</p>
                <br/>
                <p>Access Token:</p>
                <p>{authService.getAuthTokens().access_token}</p>
                <br/>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }

}

export default Home;