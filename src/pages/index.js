import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import * as styles from "../styles/layout.module.css";
import Layout from "../components/Layout";
import MyAppBar from "../components/Appbar";
import Login from "./login";
import Logout from "./logout";
import { gapi } from 'gapi-script';

const clientId = process.env.GOOGLE_CLIENT_ID;

const IndexPage = () => {

  // React.useEffect(()=>{

  //   console.log("starting gapi client")
  //   function start(){
  //     gapi.client.init({
  //       client_id: clientId,
  //       scope:["profile"]
  //     })
  //   };

  //   gapi.load('client:auth2', start);
  // })

  return (
    <Layout pageTitle="Home Page">
      <MyAppBar />
      <Box sx={{ position: "relative", top: -65 }}>
        <StaticImage
          alt="personal profile pic"
          src="../images/PersonalSite_Hero_bg_shadow.png"
          layout="fullWidth"
        />
      </Box>
      <Box display='flex' flexDirection={'row'} sx={{height: 50}}>
      </Box>
      <Box
        className={styles.AboutMe}
        sx={{ bgcolor: "red", width: "100vw", height: 400 }}
      />
    </Layout>
  );
};

export default IndexPage;
