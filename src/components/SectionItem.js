import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import * as styles from "../styles/layout.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

const layoutColors = [
    "#fff",
    "#f3f3f2",
    "#f3f3f2",
]

const SectionItem = ({ post, index }) => {
    const layout = index % 2 === 0 ? 0 : 2;
    const image = getImage(post.frontmatter.image);

    return (
        <Box
            key={post.id}
            className={styles.layoutBox}
            sx={{
                bgcolor: `${layoutColors[layout]}`
            }}
        >
            <Typography className={styles.bodyText} variant="h5" sx={{ paddingTop: 5 }}>
                {post.frontmatter.header}
            </Typography>
            <Typography variant="h1" sx={{ fontFamily: "Robot Slab, serif", my: 3 }}>
                {post.frontmatter.title}
            </Typography>
            <Grid container direction="row" spacing={5}>
                <Grid
                    container
                    item
                    order={layout}
                    xs={12}
                    md={6}
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    textAlign='left'
                >
                    <Container>
                        <Typography variant="body1" className={styles.bodyText} textAlign='justify'>
                            <MDXRenderer>
                                {post.body}
                            </MDXRenderer>

                        </Typography>
                    </Container>

                </Grid>
                <Grid container item xs={12} md={6} order={1} flexDirection={'column'} sx={{ justifyContent: 'center', alighItems: 'center', flexGrow: 1 }}>
                    <GatsbyImage
                        image={image}
                        alt={post.frontmatter.alt}
                        src="../images/sea_turtle.jpeg"
                    />
                    <Box position='relative' sx={{ positionBottom: '300px' }}>
                        <a href={post.frontmatter.image_credit}>
                            <p>{post.frontmatter.image_credit}</p>
                        </a>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default SectionItem;