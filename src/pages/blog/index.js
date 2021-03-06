import React, {useEffect} from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  Grid,
  CardActionArea,
} from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import MyAppBar from "../../components/Appbar";

const BlogPage = ({ data: allPosts }) => {

  useEffect(()=>{
    deckDeckGoHighlightElement();
  },[])

  
  console.log(data);
  return (
    <Layout>
      <MyAppBar currentPage = "Articles" />
      <Grid container direction={"row"} spacing={3} sx={{justifyContent: 'center'}} >
        {allPosts.allMdx.nodes.map((post) => {
          const image = getImage(post.frontmatter.hero_image);
          return (
            <Grid item key={post.id}>
              <Card sx={{ width: 345, height: 400 }} elevation={10}>
                <CardMedia>
                  <GatsbyImage image={image} alt={post.frontmatter.alt} />
                </CardMedia>
                <CardHeader
                  title={post.frontmatter.title}
                  subheader={post.frontmatter.date}
                />

                <CardActionArea>
                  <Link to={`/blog/${post.slug}`}>
                    <Typography variant = 'button'>{post.frontmatter.title}</Typography>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
        
      </Grid>
    </Layout>
  );
};

export const data = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          header
          title
          alt
          date(formatString: "MMMM DD YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        id
      }
    }
  }
`;

export default BlogPage;
