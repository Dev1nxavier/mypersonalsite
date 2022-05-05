import React, { Component } from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { Container, Paper, Typography } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  //retrieve hero image
  const image = getImage(data.mdx.frontmatter.hero_image);

  console.log("image:", image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      

      <Paper>
      <Typography variant="h1">{data.mdx.frontmatter.title}</Typography>
      <Container>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.alt} />
        <a href={data.mdx.frontmatter.hero_image_credit_text}>
          <p>Photocredit {data.mdx.frontmatter.hero_image_credit_text}</p>
        </a>
      </Container>
        
        <Typography variant="body1">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Typography>
      </Paper>
    </Layout>
  );
};

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
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
