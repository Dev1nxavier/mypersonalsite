import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import { graphql } from "gatsby";
import MyAppBar from "../components/Appbar";

const IndexPage = ({ data }) => {
  console.log("All posts:", data);

  return (
    <Layout pageTitle="Home Page">
      <MyAppBar/>
      <Box sx={{ position: "relative", top: -65 }}>
        <StaticImage
          alt="personal profile pic"
          src="../images/hero_05.png"
        />
      
        
      </Box>
      <Sections allPosts={data} />
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/(sections)/" } }
    sort: {order: ASC, fields: frontmatter___displayOrder}) {
      nodes {
        frontmatter {
          header
          title
          alt
          image_credit
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        body
        id
      }
    }
  }
`;

export default IndexPage;
