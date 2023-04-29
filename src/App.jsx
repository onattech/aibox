// import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './Components/NavBar'
import { Box } from '@mui/material'

function App() {
    // const [count, setCount] = useState(0)

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
                <Box sx={{ height: '1000px' }} />
            </Box>
        </Box>
    )
}

export default App
