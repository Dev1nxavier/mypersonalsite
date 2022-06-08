import React, { Children } from 'react';
import {Link} from 'gatsby';
import ContactForm from './ContactForm';
import Layout from './Layout';
import { BackButton } from './BackButton';

export default function PageTemplate({children, ...others}){

    return(
        <Layout>
            <BackButton component={Link} to="/"/>
            { children }
        </Layout>
    )
}
