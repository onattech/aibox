// import * as React from 'react'

// ** MUI Components
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Local Assets
import companyLogo from '../assets/companyLogo.png'
import star from '../assets/star.svg'
import starLight from '../assets/starLight.svg'
import award from '../assets/award.png'
import wallet from '../assets/wallet.png'
import coin from '../assets/coin.svg'

export default function ProductStats() {
    return (
        <ContainerBox>
            <StatsGrid>
                {/* Creator */}
                <StatGrid xs={2}>
                    <Title>CREATOR</Title>
                    <ImgBox src={companyLogo} alt="product-company-logo" />
                    <Subtitle>AA CreativeGroup</Subtitle>
                </StatGrid>

                {/* Rating */}
                <StatGrid xs={2}>
                    <Title>100K RATINGS</Title>
                    <Rating>4.0</Rating>
                    <Stars />
                </StatGrid>

                {/* Awards */}
                <StatGrid xs={1.9}>
                    <Title>AWARDS</Title>
                    <ImgBox src={award} alt="award" />
                    <Subtitle>Featured Creator</Subtitle>
                </StatGrid>

                {/* Category */}
                <StatGrid xs={1.8}>
                    <Title>CATEGORY</Title>
                    <ImgBox src={wallet} alt="wallet" />
                    <Subtitle>Businesss</Subtitle>
                </StatGrid>

                {/* Usage */}
                <StatGrid xs={1.8}>
                    <Title>USAGE</Title>
                    <Usage>50K</Usage>
                    <Subtitle>Top Trending</Subtitle>
                </StatGrid>

                {/* Credits */}
                <StatGrid xs={2.5}>
                    <Title>CREDITS</Title>
                    <Box display="flex" alignSelf="center" alignItems="center">
                        <ImgBox src={coin} alt="coin" sx={{ margin: 'auto', height: { xs: '43%', md: '100%' } }} />
                        <Usage>25</Usage>
                    </Box>
                    <Subtitle>
                        <Purple>100</Purple> Credits Remaining
                    </Subtitle>
                </StatGrid>
            </StatsGrid>
        </ContainerBox>
    )
}

// ** Styled Components
function ContainerBox({ children }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                ml: { xs: '2px', md: '36px' },
                mr: { xs: '8px', md: '54px' },
                mt: { xs: '59px', md: '102px' },

                // Horizontal scroll
                overflowX: 'auto',
                height: { xs: '90px', md: '150px' },

                // Hide horizontal scrollbar
                msOverflowStyle: 'none', // IE and Edge
                scrollbarWidth: 'none', // Firefox
                '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari and Opera
            }}
        >
            {children}
        </Box>
    )
}

function StatsGrid({ children }) {
    return (
        <Grid
            container
            spacing={2}
            xs={12}
            ml="0"
            sx={{
                height: { xs: '104px', md: '144px' },
                width: { xs: '690px', md: '1400px' },
                minWidth: { xs: '690px', md: '1150px' },
            }}
        >
            {children}
        </Grid>
    )
}

function ImgBox({ ...props }) {
    return (
        <Box
            component="img"
            sx={{ height: { xs: '34px', md: '56px' }, width: { xs: '34px', md: '56px' }, margin: 'auto' }}
            {...props}
        />
    )
}

function Rating({ children }) {
    return (
        <Typography
            sx={{
                color: '#00000099',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: { xs: '1.6125rem', md: '2.65rem' },
                lineHeight: { xs: '34.43px', md: '56.42px' },
                textAlign: 'center',
            }}
        >
            {children}
        </Typography>
    )
}

function Usage({ children }) {
    return (
        <Typography
            sx={{
                color: '#00000099',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: { xs: '1.03rem', md: '1.6875rem' },
                lineHeight: { xs: '20px', md: '32.67px' },
                textAlign: 'center',
            }}
        >
            {children}
        </Typography>
    )
}

function Title({ children }) {
    return (
        <Typography
            sx={{
                textAlign: 'center',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', md: '1.125rem' },
                lineHeight: '21.78px',
                color: '#00000061',
            }}
        >
            {children}
        </Typography>
    )
}

function Subtitle({ children, sx }) {
    return (
        <Typography
            sx={{
                textAlign: 'center',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: { xs: '0.625rem', md: '1rem' },
                lineHeight: '19.36px',
                color: '#00000099',
                ...sx,
            }}
        >
            {children}
        </Typography>
    )
}

function StatGrid({ children, ...rest }) {
    return (
        <Grid
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                position: 'relative',
                height: '100%',

                '&:not(:last-child)::after': {
                    content: "''",
                    position: 'absolute',
                    borderRight: '0.84px solid #9E9E9E',
                    right: '0',
                    height: '50%',
                    top: '25%',
                },
            }}
            {...rest}
        >
            {children}
        </Grid>
    )
}

function Purple({ children }) {
    return (
        <span
            style={{
                background: 'linear-gradient(0deg, #5639FF -12.89%, #746EFF 124.74%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
            }}
        >
            {children}
        </span>
    )
}

function Star({ ...props }) {
    return <Box component="img" src={star} alt="star" sx={{ width: { xs: '14px', md: '22.77px' } }} {...props} />
}

function Stars() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: '3px', md: '0px' } }}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star src={starLight} />
        </Box>
    )
}
