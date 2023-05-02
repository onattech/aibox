// import * as React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

// ** Local Assets
import star from '../assets/starPurple.svg'
import Review from './Review'

export default function Reviews() {
    return (
        <ContainerBox>
            {/* Title */}
            <Title>Reviews</Title>

            <Grid container spacing={2} mt={{ xs: '28px', md: '114px' }}>
                {/* Left Column */}
                <LeftGrid>
                    <Box display="flex">
                        <ReviewAverage>4.0</ReviewAverage>
                        <Star />
                    </Box>
                    <ReviewCount count={273} />
                </LeftGrid>

                {/* Middle Column */}
                <MiddleGrid>
                    <Box>
                        <Bar star={5} />
                        <Bar star={4} />
                        <Bar star={3} />
                        <Bar star={2} />
                        <Bar star={1} />
                    </Box>
                    <VerticalDivider />
                </MiddleGrid>

                {/* Right Column */}
                <RightGrid>
                    <Paragraph>
                        Product reviews are managed by a third party to verify authenticity and compliance with our{' '}
                        <Link href="#" color="#42A5F5">
                            Ratings & Reviews Guidelines
                        </Link>
                    </Paragraph>

                    <ActionButton>Write a review</ActionButton>
                </RightGrid>
            </Grid>

            <Review />
        </ContainerBox>
    )
}

// ** Styled Components
function ContainerBox({ children }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                ml: { xs: '16px', md: '82px' },
                mr: { xs: '16px', md: '40px' },
                mt: { xs: '24px', md: '75px' },
            }}
        >
            {children}
        </Box>
    )
}

function Title({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '2rem' },
                lineHeight: { xs: '21px', md: '35px' },
            }}
        >
            {children}
        </Typography>
    )
}

function Paragraph({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '1.75rem' },
                lineHeight: { xs: '16.94px', md: '39.38px' },
                color: ' rgba(0, 0, 0, 0.3)',
                mt: { xs: '-10px', md: '0px' },
                mb: '18px',
            }}
        >
            {children}
        </Typography>
    )
}

function Bar({ star }) {
    return (
        <Box position="relative" mb={{ xs: '11px', md: '18px' }}>
            <Box
                sx={{
                    fontFamily: 'Roboto',
                    fontSize: { xs: '0.86625rem', md: '2.04rem' },
                    lineHeight: { xs: '19.83px', md: '46.75px' },
                    ml: { xs: '5px', md: '0px' },
                }}
            >
                {star}
            </Box>
            <Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '15%',
                        right: `${((20 * (5 - star)) / 100) * 85}%`, // Calculates bar width for the remaining 85%
                        top: { xs: '28%', md: '28%' },
                        bottom: '0%',
                        height: { xs: '8px', md: '18.68px' },
                        background: 'linear-gradient(0deg, #5639FF -12.89%, #746EFF 124.74%)',
                        borderRadius: { xs: '1.98055px', md: '4.67027px' },
                        ...(star !== 5 && {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }),
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: '15%',
                        right: '0%',
                        top: { xs: '28%', md: '28%' },
                        bottom: '0%',
                        height: { xs: '8px', md: '18.68px' },
                        background: 'rgba(0, 0, 0, 0.06)',
                        borderRadius: { xs: '1.98055px', md: '4.67027px' },
                    }}
                />
            </Box>
        </Box>
    )
}

function ActionButton({ children }) {
    return (
        <Button
            variant="contained"
            mt="auto"
            sx={{
                alignSelf: 'flex-start',
                height: { xs: '40px', md: '93px' },
                width: { xs: '93%', md: '307px' },
                background: 'white',
                color: 'rgba(0, 0, 0, 0.7)',
                border: {
                    xs: '1.18199px solid rgba(0, 0, 0, 0.16);',
                    md: '2.81295px solid rgba(0, 0, 0, 0.16)',
                },
                borderRadius: { xs: '3.36157px', md: '8px' },
                boxShadow: 'unset',
                fontFamily: { xs: 'Inter', md: 'Roboto' },
                fontSize: { xs: '1rem', md: '2rem' },
                fontWeight: 400,
                textTransform: 'inherit',
                lineHeight: { xs: '150%', md: '48px' },
                '&: hover': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            {children}
        </Button>
    )
}

function Star() {
    return (
        <Box
            display="flex"
            sx={{
                ml: { xs: '15px', md: '30px' },
                mt: { xs: '-5px', md: '-15px' },
                alignItems: 'center',
                '& img': { width: { xs: '42px', md: 'unset' } },
            }}
        >
            <img src={star} alt="star" />
        </Box>
    )
}

function ReviewAverage({ children }) {
    return (
        <Typography
            sx={{
                color: 'rgba(0, 0, 0, 0.87)',
                fontFamily: 'Roboto',
                fontSize: { xs: '3.5rem', md: '8.125rem' },
                lineHeight: { xs: '73.17px', md: '133%' },
            }}
        >
            {children}
        </Typography>
    )
}

function ReviewCount({ count }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: '1.0625rem', md: '2.5rem' },
                lineHeight: { xs: '28.16px', md: '166%' },
                letterSpacing: '2.15726',
                color: 'rgba(0, 0, 0, 0.38)',
                mt: '22px',
            }}
        >
            {count} Reviews
        </Typography>
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
                border: { xs: 'none', md: '1.90px solid rgba(0, 0, 0, 0.12);' },
            }}
        />
    )
}

function LeftGrid({ children }) {
    return (
        <Grid xs={6} md={3.7} display="flex" flexDirection="column" pl={{ xs: '20px', md: 0 }}>
            {children}
        </Grid>
    )
}

function MiddleGrid({ children }) {
    return (
        <Grid xs={6} md={3.6} position="relative" pr={{ xs: '20px', md: '70px' }}>
            {children}
        </Grid>
    )
}

function RightGrid({ children }) {
    return (
        <Grid
            xs={12}
            md={4.7}
            pl={{ xs: '8px', md: '66px' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            {children}
        </Grid>
    )
}
