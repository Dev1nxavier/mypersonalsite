const {google} = require("googleapis");
const clientId=process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

//initialize googleOAuth
//redirect back to index
const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    process.env.APP_HOSTNAME
)

const handler = async(req, res)=>{
    try {
        const token = JSON.parse(req.query.token);
        if(token.access_token){
            await oauth2Client.revokeToken(token.access_token);
            return res.status(200).json({message: "token revoked"})
        }else{
            return res.status(403).json({message:"auth token not found"});
        }
    } catch (error) {
        console.log("Error logging out:", error);
        return res.status(500).json({message: "There was an error:", error});
    }
}

module.exports = handler;