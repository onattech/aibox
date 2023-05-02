// import * as React from 'react'

// ** MUI Components
// import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Local Assets
import maker from '../assets/maker.png'

export default function ProductMeta() {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    ml: { xs: '16px', md: '82px' },
                    mr: { xs: '16px', md: '54px' },
                    mt: { xs: '50px', md: '125px' },
                }}
            >
                <Grid container>
                    {/* Left */}
                    <Grid xs={12} md={7.2} spacing={2} position="relative" mx={{ xs: '16px', md: 'unset' }}>
                        <Typography
                            display="flex"
                            alignItems="center"
                            sx={{
                                fontSize: { xs: '0.875rem', md: '1.625rem' },
                                lineHeight: { xs: '17px', md: '35px' },
                            }}
                        >
                            <Box
                                component="img"
                                src={maker}
                                alt="maker"
                                sx={{ height: { xs: '38px', md: 'unset' }, mr: { xs: '15px', md: '28px' } }}
                            />
                            Created by <Purple text="Tony Stamos" />
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Public Sans',
                                fontSize: { xs: '0.75rem', md: '1.375rem' },
                                lineHeight: { xs: '17px', md: '35px' },
                                mt: { xs: '14px', md: '26px' },
                                pr: { md: '70px' },
                            }}
                        >
                            Introducing <b>The Product Naming Generator</b>, the ultimate solution for all your naming
                            needs! Our cutting-edge product name generator uses advanced AI algorithms to generate
                            unique, memorable and attention-grabbing names for your products. Whether you're launching a
                            new product line or rebranding your existing products, The Product Naming Generator has you
                            covered. With a vast database of words and phrases, our generator ensures that you'll have a
                            name that stands out in a crowded market. Say goodbye to the frustration of naming your
                            products and hello to The Product Naming Generator, your one-stop shop for all your naming
                            needs.
                        </Typography>

                        {/* Desktop only */}
                        <VerticalDivider />
                    </Grid>

                    {/* Mobile only divider */}
                    <Divider
                        sx={{
                            display: { md: 'none' },
                            width: '100%',
                            borderWidth: '1px',
                            borderColor: '#D1D5DB',
                            my: '30px',
                        }}
                    />

                    {/* Right */}
                    <Grid xs={12} md={4.8} mt={{ md: '60px' }} mx={{ xs: '16px', md: 'unset' }}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, mr: '30px' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '0.893125rem', md: '2rem' },
                                    lineHeight: { xs: '15.63px', md: '35px' },
                                }}
                            >
                                What's New
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '0.67rem', md: '2rem' },
                                    lineHeight: { xs: '15.63px', md: '35px' },
                                    color: '#1C64F2',
                                    ml: { xs: '10px', md: '20px' },
                                }}
                            >
                                (Version History)
                            </Typography>
                        </Box>
                        <Divider
                            sx={{
                                border: '0.446556px solid #E5E7EB',
                                my: { xs: '10px', md: '20px' },
                                ml: { xs: '0', md: '250px' },
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '0.725625rem', md: '1.625rem' },
                                lineHeight: { xs: '15.63px', md: '35px' },
                                color: '#4B5563',
                                textAlign: { xs: 'left', md: 'right' },
                            }}
                        >
                            Version 1.0.2: updated 2 days ago
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '0.725625rem', md: '1.625rem' },
                                lineHeight: { xs: '15.63px', md: '35px' },
                                textAlign: { xs: 'left', md: 'right' },
                                maxWidth: { md: '27ch' },
                                ml: { md: 'auto' },
                                mt: { xs: '10px', md: '23px' },
                            }}
                        >
                            Your are now able to input several different subjects in one field.
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '0.725625rem', md: '1.625rem' },
                                lineHeight: { xs: '15.63px', md: '35px' },
                                textAlign: { xs: 'left', md: 'right' },
                                maxWidth: { md: '27ch' },
                                ml: { md: 'auto' },
                                mt: { xs: '10px', md: '36px' },
                            }}
                        >
                            Please enjoy an exporter for all names to google sheets!{' '}
                            <span style={{ color: '#1C64F2' }}>more</span>
                        </Typography>
                    </Grid>

                    {/* Mobile only divider */}
                    <Divider
                        id="mob"
                        sx={{
                            display: { md: 'none' },
                            width: '100%',
                            borderWidth: '1px',
                            borderColor: '#D1D5DB',
                            my: '30px',
                        }}
                    />
                </Grid>
            </Box>

            <Divider
                variant="fullWidth"
                sx={{
                    borderWidth: '1px',
                    mt: { xs: '30px', md: '66px' },
                    mb: { xs: '20px', md: '66px' },
                    borderColor: '#D1D5DB',
                    display: { xs: 'none', md: 'block' },
                }}
            />
        </>
    )
}

// ** Styled Components
function Purple({ text }) {
    return (
        <Box
            component="span"
            sx={{
                background: 'linear-gradient(0deg, #5639FF -12.89%, #746EFF 124.74%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgrounClip: 'text',
                textFillColor: 'transparent',
                ml: { xs: '5px', md: '10px' },
            }}
        >
            {text}
        </Box>
    )
}

function VerticalDivider() {
    return (
        <Divider
            orientation="vertical"
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '90%',
                mt: '35px',
                border: { xs: 'none', md: '1.90px solid rgba(0, 0, 0, 0.12);' },
            }}
        />
    )
}
