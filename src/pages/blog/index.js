import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import {
  ListItemButton,
  ListItemText,
  ListItem,
  List,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import image from "../../images/aboutMe_image.png";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Grid container direction={"row"} spacing={3}>
        {data.allMdx.nodes.map((post) => (
          <Grid item>
            <Card sx={{ minWidth: 345 }}>
              <CardHeader title={post.slug} subheader={post.frontmatter.date} />
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
              />
              <Link to={`/blog/${post.slug}`}>{post.slug}</Link>
            </Card>
          </Grid>
        ))}
        <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="../../images/logo_SG.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D YY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
