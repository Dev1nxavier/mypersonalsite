import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MyAppBar from './Appbar';
import * as styles from '../styles/layout.module.css';

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
        <React.Fragment>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            {children}
        </React.Fragment>
    )
}

