import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import * as styles from "../styles/layout.module.css";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Sections = ({ allPosts }) => {
  console.log("all posts:", allPosts);
  const layoutColors =[
    "#fff",
    "#f3f3f2",
    "#f3f3f2",
]

  return (
    <>
      {allPosts.allMdx.nodes.map((post, index) => {
        const layout = index%2==0?0:2;
        const image = getImage(post.frontmatter.image);
        return (
          <Box
          key={post.id}
            sx={{
              marginTop:5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: `${layoutColors[layout]}`
            }}
          >
            <Typography className={styles.bodyText} variant="h5" sx={{paddingTop:5}}>
              {post.frontmatter.header}
            </Typography>
            <Typography variant="h1" sx={{ fontFamily: "Robot Slab, serif" }}>
              {post.frontmatter.title}
            </Typography>
            <Container>
            <Grid container direction="row" spacing={5} sx={{ marginTop: 5 }}>
            <Grid
              item
              order={layout}
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" className={styles.bodyText}>
                  <MDXRenderer>
                      {post.body}
                  </MDXRenderer>

              </Typography>
            </Grid>
            <Grid container item xs={12} md={6} order={1} display='flex' flexDirection={'column'} sx={{justifyContent:'center', alighItems:'center'}}>
              <GatsbyImage
                image={image}
                alt={post.frontmatter.alt}
                src="../images/sea_turtle.jpeg"
              />
              <a href={post.frontmatter.image_credit}>
                <p>{post.frontmatter.image_credit}</p>
              </a>
            </Grid>
          </Grid>
          </Container>
          </Box>
        );
      })}
    </>
  );
};

export default Sections;
