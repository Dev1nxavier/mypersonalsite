const { google } = require("googleapis");

const client_id=process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

console.log('In googleAccessToken');
//initialize googleOAuth
const oauth2Client = new google.auth.OAuth2(
    client_id,
    clientSecret,
    //redirect to localhost until publish
    process.env.GOOGLE_REDIRECT_URI
)

//set auth type as oauth2client
google.options({auth: oauth2Client});

const googleAccessToken = async (req, res)=>{

    try {
        //get the code appended from Google generateAuthUrl
    const code = req.query.code;
    console.log('code:', code);
    //use to get the auth token
    const token = await oauth2Client.getToken(code);
    console.log("token:", token);
    oauth2Client.setCredentials(token);

    //get refresh token and store
    oauth2Client.on('tokens', (tokens)=>{
        if(tokens.refresh_token){
            window.localStorage.setItem("Google:refresh_token", tokens.refresh_token);
        }
    })

    //redirect to auth page and set token in the URL
    return res.redirect(`${process.env.APP_REDIRECT_URI}?token=${JSON.stringify(token?.tokens)}`); 
    } catch (error) {
        console.error("error accessing token:", error);
    }
   
}

export default googleAccessToken;