import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material';
import ContactForm from '../components/ContactForm';
import * as styles from '../styles/layout.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MyAppBar from '../components/Appbar';


export default function ContactMePage() {

    return <Layout pageTitle="Contact Me">
        <MyAppBar currentPage="Contact"/>
        
        <ContactForm />
        <Box className={styles.layoutBox} sx={{bgcolor:'#F3F3F2'}}>
           
            <Typography variant="h1" sx={{ fontFamily: "Robot Slab, serif", my: 3 }}>
                Work with me
            </Typography>
            <Grid container direction='row' spacing={5}>
                <Grid item xs={12} md={6} container direction='column'>
                    <StaticImage
                        alt='Boston street signs at intersection'
                        src='../images/Boston_Intersection.jpeg'
                    />
                    <a href="https://unsplash.com/@mylene1708">
                        <p>credit: Mylene Tremoyet
                        </p>
                    </a>
                </Grid>
                <Grid item xs={12} md={6} container direction='column' justifyContent='center'>
                    <Container>
                        <Box component={Typography} variant="h4" className={styles.bodyText} textAlign='center'>
                            My City
                            <Typography variant='body1' marginTop={1} marginBottom={5}>
                                Boston, MA
                            </Typography>

                            Contact me
                            <Typography variant='body1' marginBottom={1}>
                                <a href='mailto:smgreenedev@gmail.com'><p>smgreenedev@gmail.com</p></a>
                                +1 508&bull;274&bull;5077
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
        
    </Layout>
}
