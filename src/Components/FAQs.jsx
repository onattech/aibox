import * as React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function FAQs() {
    return (
        <ContainerBox>
            {/* Title */}
            <Title>FAQs</Title>

            {/* Accordion */}
            {info.map((data) => (
                <AccordionGroup data={data} key={data.id} />
            ))}
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
                mt: { xs: '-10px', md: '60px' },
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
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '2rem' },
                lineHeight: { xs: '21px', md: '35px' },
                mb: { xs: '20px', md: '50px' },
            }}
        >
            {children}
        </Typography>
    )
}

function AccordionGroup({ data }) {
    return (
        <Accordion
            defaultExpanded={data.defaultExpanded}
            disableGutters
            square
            sx={{
                background: '#f7f7f8',
                borderRadius: { sx: '3.1px', md: '10px' },
                mb: '10px',
                boxShadow: 'none',
                '&:before': {
                    display: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<CustomExpandIcon fontSize="0.08125rem" sx={{ color: '##111928', fontSize: '0.875rem' }} />}
                aria-controls={`${data.id}-content`}
                id={`${data.id}-header`}
                sx={{
                    color: '#111928',
                    minHeight: { xs: '23px', md: 'unset' },
                    maxHeight: { xs: '23px', md: 'unset' },
                    px: { xs: '4px', md: '16px' },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        transition: 'none',
                        '&.Mui-expanded': {
                            transform: 'none',
                        },
                    },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        color: '#111928',
                        fontWeight: 500,
                        fontSize: { xs: '0.75rem', md: '1.521875rem' },
                        lineHeight: { xs: '16.8px', md: '34.09px' },
                    }}
                >
                    {data.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: '#fff', px: { xs: '4px', md: '16px' } }}>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: { xs: '0.75rem', md: '1.353125rem' },
                        lineHeight: { xs: '14.52px', md: '32.47px' },
                        color: '#646872',
                    }}
                >
                    {data.body}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

const CustomExpandIcon = () => {
    return (
        <Box
            sx={{
                '.Mui-expanded & > .collapseIconWrapper': {
                    display: 'none',
                },
                '.expandIconWrapper': {
                    display: 'none',
                },
                '.Mui-expanded & > .expandIconWrapper': {
                    display: 'block',
                },
                height: '24px',
                color: '#111928',
                '& svg': {
                    fontSize: { xs: '0.875rem', md: '1.5rem' },
                },
            }}
        >
            <div className="expandIconWrapper">
                <RemoveIcon />
            </div>
            <div className="collapseIconWrapper">
                <AddIcon />
            </div>
        </Box>
    )
}

// ** Sample data
const info = [
    {
        defaultExpanded: true,
        id: 'panel1',
        title: 'How do I use this box?',
        body: 'We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',
    },
    {
        defaultExpanded: false,
        id: 'panel2',
        title: 'Can I make my own version of this box?',
        body: 'We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',
    },
    {
        defaultExpanded: false,
        id: 'panel3',
        title: 'What are credits?',
        body: 'We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',
    },
    {
        defaultExpanded: false,
        id: 'panel4',
        title: 'Can I resell this box?',
        body: 'We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',
    },
    {
        defaultExpanded: false,
        id: 'panel5',
        title: 'What is a box?',
        body: 'We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.',
    },
]
