import React, { Component } from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { Container, Typography, Box, Grid, AppBar } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { getImage } from "gatsby-plugin-image";
import MyAppBar from "../../components/Appbar";
import Video from "../../components/Video";
import profImage from '../../images/SG_FC.png';


const PortfolioItem = ({ data }) => {

  //retrieve hero image
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MyAppBar />

      <Grid container columns={3}>

        <Grid item container xs={2} justifyContent="center">
          <Box sx={{backgroundColor:'gray', height: '100%', flexGrow: 1, display:'flex', justifyContent:'center'}}>
            <Box 
            component="img" 
            sx={{
              height: 147,
              width: 147,
              maxHeight: { xs: 100, md: 147 },
              maxWidth: { xs: 100, md: 147 },
              borderRadius: '50%',
              marginTop:16,
              position:'fixed'
            }}
            alt="The house from the offer."
            src={profImage}/>
          </Box>
        </Grid>

        <Grid item container xs={8}>
          <Box sx={{ width: "100vw", height: "auto" }}>
            <Grid container direction={"column"}>
              <Grid item container sx={{ justifyContent: 'center' }}>
                <Video videoSrcURL={data.mdx.frontmatter.hero_vid} videoTitle={data.mdx.frontmatter.title} styled={{ height: 400, width: 400 }} />
                {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.alt} /> */}
              </Grid>
            </Grid>
          </Box>
          <Container>
            <Typography sx={{ textAlign: 'center' }} variant="h1">{data.mdx.frontmatter.title}</Typography>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              {data.mdx.frontmatter.subheader}
            </Typography>
            <Typography variant="body1">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Typography>
          </Container>
        </Grid>

        <Grid item container xs>
          <Box sx={{ backgroundColor: 'red', height: '100%', flexGrow: 1 }} />
        </Grid>

      </Grid>
    </Layout>
  );
};

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subheader
        date(formatString: "MMMM DD, YYYY")
        alt
        hero_vid
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PortfolioItem;
