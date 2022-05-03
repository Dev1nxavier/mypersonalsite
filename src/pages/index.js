import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyAppBar from "../components/Appbar";
import * as styles from '../styles/layout.module.css';
import { useStaticQuery, graphql } from 'gatsby'


// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <React.Fragment>
      <Typography className={styles.siteTitle}>
        {data.site.siteMetadata.title}
      </Typography>
      <MyAppBar />
      <Box sx={{ position: 'relative', top: -65 }}>
        <StaticImage
          alt="personal profile pic"
          src="../images/PersonalSite_Hero_bg_shadow.png"
          layout="fullWidth"
        />
      </Box>
      <Box className={styles.AboutMe} sx={{ bgcolor: 'red', width: '100vw', height: 400 }}>
        {/* <StaticImage
          alt="personal profile pic"
          src="../images/aboutMe_image.png"
          layout="fullWidth"
        /> */}
      </Box>


    </React.Fragment>
  )
}

export default IndexPage
