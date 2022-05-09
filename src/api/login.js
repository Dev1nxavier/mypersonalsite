const { google } = require("googleapis");

const clientId=process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

//initialize googleOAuth
const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    //redirect to localhost until publish
    process.env.GOOGLE_REDIRECT_URI
)

//set auth type as oauth2client
google.options({auth: oauth2Client});

//TODO: Confirm profile part of scope for client ID
const scopes = ["profile"];

const login = async (req, res)=>{

    try {
        const authorizeUrl = oauth2Client.generateAuthUrl({
            access_type: "offline",
            scope: scopes.join(" "),
        })
        console.log(res.redirect)
        //redirect to next Gatsby Function
        return res.redirect(authorizeUrl)
    } catch (error) {
        console.error("Error logging in to Google: ", error);
    }
    
}

export default login;