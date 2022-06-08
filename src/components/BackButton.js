import React, {  } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const BackButton = (props)=>{

    const {...others} = props;

    return(
        <IconButton aria-label='left echelon back button' color='secondary' sx={{m: 1}}{...others}>
            <ArrowBackIosIcon/>
        </IconButton>
    )
}

