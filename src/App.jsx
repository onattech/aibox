// import * as React from 'react'

// ** MUI Components
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

// ** Custom Components
import NavBar from './Components/NavBar'
import ProductSummary from './Components/ProductSummary'
import ProductStats from './Components/ProductStats'
import ProductImages from './Components/ProductImages'
import Description from './Components/Description'
import Reviews from './Components/Reviews'
import ProductMeta from './Components/ProductMeta'
import FAQs from './Components/FAQs'

function App() {
    // const [count, setCount] = React.useState(0)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                sx={{
                    // background: 'wheat',
                    // height: '100vh',
                    maxWidth: '1440px',
                    margin: 'auto',
                    width: '100%',
                }}
            >
                <NavBar />
                <ProductSummary />
                <ProductStats />
                <ProductImages />
                <Description />
                <Reviews />
                <ProductMeta />
                <FAQs />
                <Box sx={{ height: '200px' }} />
            </Box>
        </Box>
    )
}

export default App
