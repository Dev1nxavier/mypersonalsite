import React from 'react'
import { Typography, Grid, Box, Container } from '@mui/material';
import Layout from '../components/Layout';
import MyAppBar from '../components/Appbar';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/layout.module.css';
import Sections from '../components/Sections';
import { graphql } from 'gatsby';


const AboutMePage = ({data}) => {

    console.log(data);
    return (
        <Layout pageTitle="About Me">
            <MyAppBar currentPage="About"/>
            <Sections allPosts={data.allMdx.nodes}/>
        </Layout>
    )
}

export default AboutMePage;

export const data = graphql`query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/(sections)/"}, slug: {ne: "about-me/"}}
      sort: {order: ASC, fields: frontmatter___displayOrder}
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          header
          alt
          image_credit
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  }`
