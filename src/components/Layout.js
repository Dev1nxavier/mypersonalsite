import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';

let theme = createTheme();

theme = responsiveFontSizes(theme);


export default function Layout({ pageTitle, children }) {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
            <React.Fragment>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                {children}
            </React.Fragment>
            </ParallaxProvider>
        </ThemeProvider>
    )
}

