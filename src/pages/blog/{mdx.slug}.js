import React, { Component } from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { Container, Typography, Box, Grid } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BackButton } from "../../components/BackButton";


const BlogPost = ({ data }) => {

  //retrieve hero image
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      
      <Box sx={{ width: "100vw", height: "auto" }}>
      <BackButton component={Link} to="/blog"/>
        <Grid container direction={"column"}>
          <Grid item container sx={{justifyContent:'center'}}>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.alt} />
          </Grid>
        </Grid>
      </Box>
      <Container>
      <Typography variant="h1">{data.mdx.frontmatter.title}</Typography>
            <Typography variant="h5">
              {data.mdx.frontmatter.subheader}
            </Typography>
        <Typography variant="body1">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Typography>
      </Container>
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

export default BlogPost;
