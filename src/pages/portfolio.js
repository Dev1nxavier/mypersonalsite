import { Typography } from '@mui/material';
import React from 'react';
import MyAppBar from '../components/Appbar';
import Layout from '../components/Layout';

export default function PortfolioPage(){

    return(
        <Layout>
            <MyAppBar currentPage="Portfolio"/>
            <Typography variant='h1'>Coming Soon</Typography>
        </Layout>
    )
}