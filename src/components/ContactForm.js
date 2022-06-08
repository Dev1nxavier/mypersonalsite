import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Box, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/layout.module.css'
import { styled } from '@mui/material/styles'
import { purple } from '@mui/material/colors';
import { Honeypot, NetlifyFormProvider, NetlifyFormComponent, useNetlifyForm } from 'react-netlify-forms';
import { Pattern } from '@mui/icons-material';
import { color, fontSize } from '@mui/system';

const ContactForm = (props) => {

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
    const STRING_REGEX = /^([1-zA-Z0-1@.\s]{1,255})$/

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#444444",
        "&:hover": {
            backgroundColor: purple[700],
        },
    }));

    const { control, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            fullName: '',
            emailAddress: '',
            messageBody: '',

        }
    })

    const netlify = useNetlifyForm({
        name: 'react-hook-form',
        action: '/thanks',
        honeypotName: 'bot-field',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify Server', response)
        }
    })



    const onSubmit = (data) => {
        console.log("You submitted the form:", data)
        netlify.handleSubmit(null, data);
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
                    <Grid item container direction='column' rowSpacing={3} sx={{ flexGrow: 1 }} >
                        <NetlifyFormProvider {...netlify}>
                            <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                                <Honeypot />
                                <Box sx={{ m: 5, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-around' }}>

                                    <Controller
                                        name="fullName"
                                        control={control}
                                        rules={{
                                            required: "Please provide your name",
                                            pattern: {
                                                value: STRING_REGEX,
                                                message: "Please include your full name"
                                            }
                                        }}
                                        render={({ field }) => <TextField
                                            {...field}
                                            sx={{ bgcolor: '#D9D9D9' }}
                                            id="first-name"
                                            label="Your name"
                                            variant='filled'
                                        />}
                                    />
                                    {errors?.fullName && <Typography variant='subtitle2' sx={{ color: 'red' }}>{errors.fullName.message}</Typography>}
                                    <Controller
                                        name="emailAddress"
                                        control={control}
                                        rules={{
                                            required: "Please provide your email",
                                            pattern: {
                                                value: EMAIL_REGEX,
                                                message: 'Invalid email address'
                                            }
                                        }
                                        }
                                        render={({ field }) => <TextField
                                            {...field}
                                            sx={{ bgcolor: '#D9D9D9', marginTop: 3 }}
                                            id="email"
                                            label="Your email"
                                            variant='filled'
                                        />}
                                    />
                                    {errors?.emailAddress && <Typography variant='subtitle2' sx={{ color: 'red' }}>{errors.emailAddress.message}</Typography>}
                                    <Controller
                                        name="messageBody"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Please send me a brief message"
                                            },
                                            pattern: {
                                                value: STRING_REGEX,
                                                message: "Please input valid text"
                                            }
                                        }}
                                        render={({ field }) => <TextField
                                            {...field}
                                            sx={{ bgcolor: '#D9D9D9', marginTop: 3 }}
                                            id="message"
                                            label="Message"
                                            variant='filled'
                                            multiline
                                            rows={5}
                                        />}
                                    />
                                    {errors?.messageBody && <Typography variant='subtitle2' sx={{ color: 'red' }}>{errors.messageBody.message}</Typography>}
                                    <ColorButton
                                        sx={{ maxWidth: 200, alignSelf: 'center', marginTop: 3 }}
                                        type='submit'
                                        variant='outlined'
                                    >
                                        Submit
                                    </ColorButton>
                                </Box>
                            </NetlifyFormComponent>
                        </NetlifyFormProvider>


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
        </Box >
    )
}

export default ContactForm;