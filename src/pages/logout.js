import React from 'react';
import { GoogleLogout } from 'react-google-login'

const client_id = process.env.GOOGLE_CLIENT_ID;
const key = process.env.GOOGLE_CLIENT_SECRET;

const onSuccess=(res)=>{
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
}

const onFailure=(res)=>{
    console.error("LOGIN FAILED! res:", res);
}

function Logout(){
    return(
        <div id='signoutButton'>
            <GoogleLogout
            clientId={client_id}
            buttonText={"Logout"}
            onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;