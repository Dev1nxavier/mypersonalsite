import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

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
            <React.Fragment>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>

                {children}

            </React.Fragment>
        </ThemeProvider>
    )
}

