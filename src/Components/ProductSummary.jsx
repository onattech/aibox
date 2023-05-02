// import * as React from 'react'

// ** MUI Components
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** Local Assets
import productSummary from '../assets/productSummary.png'

export default function ProductSummary() {
    return (
        <ContainerBox>
            {/* Product image */}
            <ImgProduct src={productSummary} />

            {/* Product summary */}
            <Grid container spacing={2} sx={{ ml: { xs: '20px', md: '65px' } }}>
                <Grid xs={12} md={9} display="flex" pl="0" flexDirection="column" justifyContent="center">
                    {/* Title */}
                    <Title>Product Name Generator</Title>

                    {/* Body */}
                    <Body>
                        Brainstorm business names at 1,000X the speed with this super helpful product name generator
                    </Body>
                </Grid>

                {/* Action button */}
                <GridButton>
                    <ButtonAction>Use</ButtonAction>
                </GridButton>
            </Grid>
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
                ml: { xs: '16px', md: '82px' },
                mr: { xs: '16px', md: '54px' },
                mt: { xs: '101px', md: '220px' },
            }}
        >
            {children}
        </Box>
    )
}

function ImgProduct({ src }) {
    return (
        <Box
            component="img"
            src={src}
            alt="logo"
            sx={{
                borderRadius: '10px',
                filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))',
                height: { xs: '99px', md: '210px' },
            }}
        />
    )
}

function Title({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: { xs: '1.125rem', md: '2.625rem' },
                lineHeight: { xs: '27px', md: '63px' },
            }}
        >
            {children}
        </Typography>
    )
}

function Body({ children }) {
    return (
        <Typography
            sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: { xs: '0.75rem', md: '2rem' },
                lineHeight: { xs: '18px', md: '48px' },
                mt: '6px',
            }}
        >
            {children}
        </Typography>
    )
}

function GridButton({ children }) {
    return (
        <Grid
            xs={12}
            md={3}
            pl="0"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}
        >
            {children}
        </Grid>
    )
}

function ButtonAction({ children }) {
    return (
        <Button
            variant="contained"
            sx={{
                height: { xs: '28px', md: '52px' },
                width: { xs: '115px', md: '180px' },
                borderRadius: { xs: '10px', md: '22px' },
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '1.35rem' },
                lineHeight: { xs: 1.25, md: 1.75 },
                fontFamily: 'Inter',
                textTransform: 'capitalize',
                background: 'linear-gradient(0deg, #5639FF -12.89%, #746EFF 124.74%)',
            }}
        >
            {children}
        </Button>
    )
}
