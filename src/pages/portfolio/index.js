import { graphql, Link } from 'gatsby';
import React from 'react';
import MyAppBar from '../../components/Appbar';
import Layout from '../../components/Layout';
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  CardActionArea,
} from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function PortfolioPage({data: allPosts}){

    return(
        <Layout>
            <MyAppBar currentPage="Portfolio"/>
            <Grid container direction={"row"} spacing={3} sx={{justifyContent: 'center'}} >
        {allPosts.allMdx.nodes.map((post) => {
          const image = getImage(post.frontmatter.hero_image);
          return (
            <Grid item key={post.id}>
              <Link to={`/portfolio/${post.slug}`}>
              <Card sx={{ width: 345, height: 450 }} elevation={10}>
              <CardHeader
                  title={post.frontmatter.title}
                  subheader={post.frontmatter.date}
                />
                <CardMedia sx={{width: 345, maxHeigt: 145}}>
                  <GatsbyImage image={image} alt={post.frontmatter.alt} />
                </CardMedia>
               

                <CardActionArea>
                  
                </CardActionArea>
              </Card>
              </Link>
            </Grid>
          );
        })}
        
      </Grid>
        </Layout>
    )
}

export const data = graphql`
query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/(projects)/"}}
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD YYYY")
          alt
          header
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
  
  `