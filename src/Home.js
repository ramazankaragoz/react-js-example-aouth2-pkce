import React, { useContext } from 'react'
import { AuthContext} from "react-oauth2-code-pkce"

const Home = props =>{

    const { tokenData, token, logOut, idToken, error } = useContext(AuthContext);

    if (error){
        return <>
            <div style={{color: "red"}}>An error occurred during authentication: {error}</div>
            <button onClick={()=>logOut()}>Logout</button>
        </>

    }

    return  (
        <>
            {token ?
                <>
                    <div>
                        <h4>Access Token (JWT)</h4>
                        <pre style={{
                            width: '400px',
                            margin: "10px",
                            padding: "5px",
                            border: "black 2px solid",
                            wordBreak: 'break-all',
                            whiteSpace: 'break-spaces',
                        }}>
                  {token}</pre>
                    </div>
                    <div>
                        <h4>Login Information from Access Token (Base64 decoded JWT)</h4>
                        <pre style={{
                            width: '400px',
                            margin: "10px",
                            padding: "5px",
                            border: "black 2px solid",
                            wordBreak: 'break-all',
                            whiteSpace: 'break-spaces',
                        }}>
                  {JSON.stringify(tokenData, null, 2)}</pre>
                    </div>
                    <button onClick={()=>logOut()}>Logout</button>
                </> :
                <div>You are not logged in. Refresh page to login.</div>
            }
        </>
    )

}

export default Home;