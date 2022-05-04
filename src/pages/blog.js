import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ListItemButton, ListItemText, ListItem, List, Card, CardContent, Typography } from '@mui/material';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const BlogPage = ({ data }) => {



    return (
        <Layout>
            <List>
                {data.allMdx.nodes.map(node => (
                    <ListItem>
                        <ListItemText
                            primary={node.frontmatter.title}
                        />
                    </ListItem>
                ))}
            </List>
                {data.allMdx.nodes.map(post=>(
                    <Card>
                        <CardContent>
                            <Typography>
                                {post.frontmatter.title}
                            </Typography>
                            <Typography>
                                {post.frontmatter.date}
                            </Typography>
                            <MDXRenderer>
                                {post.body}
                            </MDXRenderer>
                        </CardContent>
                    </Card>
                ))}
            <Card>

            </Card>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D YY")
          title
        }
        id
        body
      }
    }
  }`

export default BlogPage;