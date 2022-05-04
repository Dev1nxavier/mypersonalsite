import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import * as styles from '../styles/layout.module.css';
import Layout from '../components/Layout';
import MyAppBar from "../components/Appbar";

// markup
const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page" >
      <MyAppBar/>
      <Box sx={{ position: 'relative', top: -65 }}>
        <StaticImage
          alt="personal profile pic"
          src="../images/PersonalSite_Hero_bg_shadow.png"
          layout="fullWidth"
        />
      </Box>
      <Box className={styles.AboutMe} sx={{ bgcolor: 'red', width: '100vw', height: 400 }}/>
      </Layout>
  )
}

export default IndexPage
