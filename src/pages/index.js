import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import { graphql, Link } from "gatsby";
import MyAppBar from "../components/Appbar";
import { Typography } from "@mui/material";
import ContactMe from "../components/ContactForm";
import seaTurtle from "../images/sea_turtle_v2.jpeg";
import blueTang from "../images/blue_tang.jpeg";
import clownFish from "../images/clown_fish.jpeg";
import crab from '../images/crab.jpeg';
import seaStar from "../images/sea_start.jpeg";
import * as styles from '../styles/layout.module.css';
import ProjectButton from "../components/ProjectButton";
import Hero from "../components/MyHero";


const portfolioArray = [
  seaTurtle,
  blueTang,
  clownFish,
  crab,
  seaStar,
]

const IndexPage = ({ data }) => {
  console.log("All posts:", data);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked project with data:", e);
  }

  return (
    <Layout pageTitle="Home Page">
      <MyAppBar currentPage="Home" />
      <Hero />
      <Box className={styles.layoutBox} sx={{ marginBottom: 5 }}>
        <Typography className={styles.bodyText} variant="h5" sx={{ paddingTop: 5 }}>
          Projects
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: "Robot Slab, serif", my: 3, textAlign: 'center' }}>
          A selection of works
        </Typography>
          <Box display='flex' justifyContent='center' width="100%"  data-sal = "slide-left"
                data-sal-easing = "ease-in-out">
            <ProjectButton />
          </Box>
      </Box>
        <Sections allPosts={data.allMdx.nodes} />
      <ContactMe />
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
    allMdx(filter: { fileAbsolutePath: { regex: "/(sections)/" }, slug: {ne: "skills/"} }
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
