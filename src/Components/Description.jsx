// import * as React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Local Assets
import stack from '../assets/stack.svg'

export default function Description() {
    return (
        <Container>
            {/* Title */}
            <Box display="flex" alignItems="center" mb={{ xs: '15px', md: '40px' }}>
                <Box component="img" src={stack} alt="stack" sx={{ height: { xs: '11px', md: '100%' } }} />
                <Title>Description</Title>
            </Box>

            <Paragraph>
                This AI application is a virtual assistant, such as Siri or Alexa, which uses natural language
                processing to understand spoken commands and respond with relevant information or perform tasks like
                setting alarms, playing music, or ordering groceries. Another example is a chatbot, which can simulate
                human conversation to provide customer service or technical support.
            </Paragraph>

            <br />

            <Paragraph>
                AI applications are also used in industries such as healthcare, finance, and transportation. For
                example, AI algorithms can be used to analyze medical images and help doctors diagnose diseases, or to
                detect fraudulent transactions in banking systems. In self-driving cars, AI algorithms analyze sensor
                data to make real-time decisions about acceleration, braking, and steering.
            </Paragraph>

            <br />

            <Paragraph>
                Overall, AI applications have the potential to revolutionize many aspects of our lives and improve
                efficiency, accuracy, and decision-making across a wide range of industries.
            </Paragraph>
        </Container>
    )
}

// ** Styled Components
function Container({ children }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                ml: { xs: '16px', md: '82px' },
                mr: { xs: '16px', md: '40px' },
                mt: { xs: '31px', md: '78px' },
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
                fontSize: { xs: '1rem', md: '2rem' },
                lineHeight: '35px',
                ml: '10px',
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
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: { xs: '0.75rem', md: '1.5625rem' },
                lineHeight: { xs: '24px', md: '35px' },
                color: '#454444',
            }}
        >
            {children}
        </Typography>
    )
}
