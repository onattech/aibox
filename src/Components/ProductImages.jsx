// import * as React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'

// ** Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import './swiperStyles.css'

// ** Local Assets
import product1 from '../assets/product1.png'

export default function ProductImages() {
    const handleClickNext = () => {
        document.querySelector('.swiper-button-next').click()
    }

    return (
        <Container>
            {/* Swiper */}
            <Swiper slidesPerView={'auto'} spaceBetween={35} navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                    <img src={product1} alt="product1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={product1} alt="product1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={product1} alt="product1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={product1} alt="product1" />
                </SwiperSlide>
            </Swiper>

            {/* Next slide button */}
            <NextButton onClick={handleClickNext} />
        </Container>
    )
}

// ** Styled Components
function Container({ children }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                mt: { xs: '27px', md: '57px' },
                ml: { xs: '16px', md: '82px' },
                height: { xs: '190px', md: '365px' },
                mr: { xs: '16px', md: '40px' },
                position: 'relative',
            }}
        >
            {children}
        </Box>
    )
}

function NextButton({ ...props }) {
    return (
        <IconButton
            aria-label="fingerprint"
            color="secondary"
            sx={{
                width: '35px',
                height: '35px',
                color: '#9F9F9F',
                background: '#fff',
                boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '17px',
            }}
            style={{ fontSize: '2.5rem' }}
            {...props}
        >
            <ChevronRightRoundedIcon fontSize="2.5rem" />
        </IconButton>
    )
}
