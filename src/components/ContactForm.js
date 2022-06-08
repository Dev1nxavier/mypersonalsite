import React, { } from 'react';
import { Button, TextField, Typography, Grid, Box, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/layout.module.css'
import {styled} from '@mui/material/styles'
import {purple} from '@mui/material/colors';

const ContactForm = (props) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#444444",
        "&:hover": {
          backgroundColor: purple[700],
        },
      }));

    const { control, handleSubmit, setValue, reset } = useForm({
        defaultValues: {
            fullName: '',
            emailAddress: '',
            messageBody: '',

        }
    })

    const onSubmit = (data) => {
        console.log("You submitted the form:", data)
        reset();
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid container direction='row' spacing={5}>
                <Grid container item xs={12} md={6} direction='column' textAlign='center' alignItems='center' spacing={5}>
                    <Grid item container direction='column'>
                        <Typography className={styles.bodyText} variant="h5" sx={{ paddingTop: 5 }}>
                            Contact me
                        </Typography>
                        <Typography variant="h1" sx={{ fontFamily: "Robot Slab, serif" }}>
                            Get in touch
                        </Typography>
                    </Grid>
                    <Grid item container direction='column' rowSpacing={3} sx={{flexGrow: 1}} >
                            <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off' sx={{ m:5, display: 'flex', flexDirection: 'column', flexGrow:1, justifyContent:'space-around' }}>
                                <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => <TextField
                                        {...field}
                                        sx={{ bgcolor: '#D9D9D9' }}
                                        id="first-name"
                                        label="Your name"
                                        variant='filled'
                                    />}
                                />
                                <Controller
                                    name="emailAddress"
                                    control={control}
                                    render={({ field }) => <TextField
                                        {...field}
                                        sx={{ bgcolor: '#D9D9D9' }}
                                        id="email"
                                        label="Your email"
                                        variant='filled'
                                    />}
                                />
                                <Controller
                                    name="messageBody"
                                    control={control}
                                    render={({ field }) => <TextField
                                        {...field}
                                        sx={{ bgcolor: '#D9D9D9' }}
                                        id="message"
                                        label="Message"
                                        variant='filled'
                                        multiline
                                        rows={5}
                                    />}
                                />
                                <ColorButton
                                    sx={{maxWidth: 200, alignSelf:'center'}}
                                    type='submit'
                                    variant='outlined'
                                   >
                                    Submit
                                </ColorButton>
                            </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={6} direction='column'>
                    <StaticImage
                        alt='Open laptop with espresso in forground'
                        src="../images/Laptop_Espresso.jpeg"
                    />
                    <a href="https://unsplash.com/@mylene1708">
                        <p>credit: Mylene Tremoyet
                        </p>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactForm;