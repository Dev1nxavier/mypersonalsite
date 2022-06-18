import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import blue_tang from '../images/blue_tang.jpeg';
import muffintoit_logo from '../images/muffintoit_logo.png';
import clownFish from '../images/clown_fish.jpeg';
import { Link } from 'gatsby';


const images = [
    {
        url: blue_tang,
        title: 'NewsApp',
        width: '40%',
        text: "Demonstration of react-fetch and headless CMS"
    },
    {
        url: muffintoit_logo,
        title: 'Muffin To It',
        slug: 'muffin-to-it',
        width: '30%',
        text: "Fully-functional React-Native eCommerce app"
    },
    {
        url: clownFish,
        title: 'Muffin To It - Web',
        width: '30%',
        text: 'eCommerce site written in NextJS.'
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    width: 300,
    
    borderRadius:'50%',
    [theme.breakpoints.down('sm')]: {
        width:  '100px !important', // Overrides inline-style
        height: '100px !important',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        
        '& .MuiImageBackdrop-root': {
            opacity: .80,

        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
            visibility: 'hidden',
        },
        '& .MuiTextBackdrop-root': {
            opacity: 1.0,
            botom: -2,
        },

        '& .MuiDescriptionText-root': {
            visibility: 'visible',
            

        }
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: "50%",
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,

}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    borderRadius: "50%",
}));

const TextBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 'calc(50%-9px',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    transition: theme.transitions.create('bottom'),
    '&hover:':{
        color: 'red'
    }
}));

const ImageTypography = styled(Typography)(({theme})=>({
    visibility: 'hidden',
}))

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const ProjectButton = () => {

    const handleClick = (event) => {
        event.preventDefault();

        console.log('from project button:', event.currentTarget.name);
    }

    return (
        <Box maxWidth='md' width={{xs:'100%',}} sx={{display:'flex', justifyContent: 'space-evenly'}}>
            {images.map((image) => (
                <ImageButton
                    name={image.title}
                    slug = {image.slug}
                    focusRipple
                    key={image.title}
                    onClick={handleClick}
                    style={{
                        margin:3
                    }}

                >
                    <Link to={`/portfolio/${image.slug}`}>
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }}/>
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image sx={{ borderRadius: "50%" }}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                        <TextBackdrop className="MuiTextBackdrop-root" sx={{ visibility: 'hidden'}}>
                            <ImageTypography
                                className='MuiDescriptionText-root'
                                component="span"
                                variant="h6"
                                color="inherit"
                                sx={{
                                    mx:3,
                                    display: 'flex',
                                    textAlign: 'center',
                                    position: 'relative',
                                    p: 6,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}>
                                {image.text}
                            </ImageTypography>
                        </TextBackdrop>
                    </Image>
                    </Link>
                </ImageButton>
            ))}
        </Box>
    )
}

export default ProjectButton;