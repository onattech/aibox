// import * as React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CheckIcon from '@mui/icons-material/Check'

// ** Local Assets
import star from '../assets/starPurple.svg'
import starLight from '../assets/starLightMedium.svg'
import flag from '../assets/flag.svg'
import kristin from '../assets/kristin.png'

export default function Review() {
    return (
        <>
            <Box display="flex" mt={{ xs: '25px', md: '125px' }} ml={{ xs: '-2px', md: '-19px' }}>
                {/* Image avatar */}
                <Box component="img" src={kristin} alt="user-avatar" sx={{ height: { xs: '24px', md: '92.21px' } }} />

                {/* Main right */}
                <Box display="flex" flexDirection="column" ml={{ xs: '6px', md: '23px' }}>
                    {/* Top */}
                    <Box display="flex" alignItems="center">
                        <Box display="flex" flexDirection="column">
                            {/* Name and country */}
                            <Box display="flex" alignItems="center">
                                <TextUsername>Kristin Watson</TextUsername>
                                <Flag src={flag} />
                                <TextCountry>United States</TextCountry>
                            </Box>

                            {/* Verified */}
                            <TextVerified>Verified Buyer</TextVerified>
                        </Box>

                        {/* Rating stars */}
                        <Box ml="auto" alignItems="center" sx={{ '& img': { ml: { xs: '3px', md: '16px' } } }}>
                            <Box component="img" src={star} alt="star" sx={{ height: { xs: '11px', md: '38px' } }} />
                            <Box component="img" src={star} alt="star" sx={{ height: { xs: '11px', md: '38px' } }} />
                            <Box component="img" src={star} alt="star" sx={{ height: { xs: '11px', md: '38px' } }} />
                            <Box component="img" src={star} alt="star" sx={{ height: { xs: '11px', md: '38px' } }} />
                            <Box
                                component="img"
                                src={starLight}
                                alt="star"
                                sx={{ height: { xs: '11px', md: '38px' } }}
                            />
                        </Box>
                    </Box>

                    {/* Title */}
                    <TextTitle>Great Generator!</TextTitle>

                    {/* Review */}
                    <TextReview>
                        This worked exactly how I thought it would. Helped me save time and efforts on ideation. Thank
                        you! Not 5 stars because I had to refresh the page every time I wanted a new name.
                    </TextReview>

                    {/* Feedback */}
                    <Box display="flex" mt={{ xs: '10px', md: '34px' }}>
                        <TextFeedback>Helpful ?</TextFeedback>
                        <TextFeedback sx={{ ml: { xs: '10px', md: '48px' } }}>Yes (2)</TextFeedback>
                        <TextFeedback sx={{ ml: { xs: '10px', md: '48px' } }}>NO (0)</TextFeedback>
                        <TextFeedback sx={{ ml: 'auto' }}>Nov 09, 2022</TextFeedback>
                    </Box>

                    {/* Recommended */}
                    <TextRecommended>Recommended</TextRecommended>
                </Box>
            </Box>

            {/* Section end divider */}
            <DividerSectionEnd />

            {/* Section end button */}
            <ButtonActionEnd>View More</ButtonActionEnd>
        </>
    )
}

// ** Styled Components
function TextUsername({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.61rem', md: '2.34125rem' },
                lineHeight: { xs: '13.51px', md: '51.87px' },
                color: 'rgba(0, 0, 0, 0.87)',
            }}
        >
            Kristin Watson
        </Typography>
    )
}

function Flag({ src }) {
    return (
        <Box
            component="img"
            src={src}
            alt="flag"
            sx={{ height: { xs: '7.81px', md: '30px' }, marginLeft: { xs: '6px', md: '26px' } }}
        />
    )
}

function TextCountry({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.61rem', md: '2.34125rem' },
                lineHeight: { xs: '13.51px', md: '51.87px' },
                color: 'rgba(0, 0, 0, 0.38)',
                ml: { xs: '3px', md: '12px' },
            }}
        >
            {children}
        </Typography>
    )
}

function TextVerified({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: { xs: '0.563125rem', md: '2.16125rem' },
                lineHeight: { xs: '15.01px', md: '57.63px' },
                color: '#4caf50',
            }}
        >
            {children}
        </Typography>
    )
}

function TextTitle({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: { xs: '0.656875rem', md: '2.52125rem' },
                lineHeight: { xs: '16.49px', md: '63.34px' },
                color: 'rgba(0, 0, 0, 0.87)',
                mt: { xs: '6px', md: '22px' },
            }}
        >
            Great Generator!
        </Typography>
    )
}

function TextReview({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.563125rem', md: '2.16125rem' },
                lineHeight: { xs: '15.01px', md: '57.63px' },
                color: 'rgba(0, 0, 0, 0.6)',
                letterSpacing: { xs: '0.3px', md: '1.15px' },
                mt: { xs: '5px', md: '23px' },
            }}
        >
            {children}
        </Typography>
    )
}

function TextFeedback({ children, sx }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.46875rem', md: '1.80125rem' },
                color: 'rgba(0, 0, 0, 0.38)',
                ...sx,
            }}
        >
            {children}
        </Typography>
    )
}

function TextRecommended({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.563125rem', md: '2.16125rem' },
                lineHeight: { xs: '15.01px', md: '57.63px' },
                color: '#4caf50',
                mt: { xs: '10px', md: '38px' },
                display: 'flex',
            }}
        >
            <CheckIcon sx={{ fontSize: { xs: '0.8rem', md: '3rem' }, mr: '4px' }} />
            {children}
        </Typography>
    )
}

function DividerSectionEnd() {
    return (
        <Divider
            sx={{
                mt: { xs: '11px', md: '50px' },
                borderWidth: { xs: '0.75042px', md: '1.5px' },
                borderColor: 'rgba(0, 0, 0, 0.08)',
                width: '100vw',
                left: 0,
                position: 'absolute',
            }}
        />
    )
}

function ButtonActionEnd({ children }) {
    return (
        <Box position="relative">
            <Button
                variant="contained"
                sx={{
                    position: 'absolute',
                    top: { xs: '6px', md: '30px' },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(0deg, #5639FF -12.89%, #746EFF 124.74%)',
                    borderRadius: '32.0293px',
                    width: { xs: '66.41px', md: '262px' },
                    height: { xs: '11.53px', md: '45.48px' },
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: { xs: '0.405625rem', md: '1.60125rem' },
                    textTransform: 'unset',
                    lineHeight: '38.44px',
                    minWidth: '68px',
                }}
            >
                {children}
            </Button>
        </Box>
    )
}
