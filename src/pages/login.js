import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import { GoogleLogin } from 'react-google-login';

const client_id = process.env.GOOGLE_CLIENT_ID;
const key = process.env.GOOGLE_CLIENT_SECRET;

const onSuccess=(res)=>{
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
}

const onFailure=(res)=>{
    console.error("LOGIN FAILED! res:", res);
}

function Login(){
    return(
        <div id="signInButton">
            <GoogleLogin
            client_id={client_id}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login;