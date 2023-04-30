import * as React from 'react'

// ** MUI Components
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'

// ** Local Assets
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.svg'

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id="primary-search"
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                component="navbar"
                sx={{
                    position: 'fixed',
                    justifyContent: 'center',
                    color: ' #25303B',
                    background: '#fff',
                    height: '96px',
                    maxWidth: '1440px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: 'unset',
                }}
            >
                <Toolbar sx={{ justifyContent: 'center' }}>
                    {/* Mobile-only menu icon */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="#D8D8D8"
                        aria-label="open drawer"
                        sx={{ mr: '5px', display: { xs: 'inline-flex', sm: 'none' } }}
                    >
                        <img src={hamburger} alt="hamburget-menu" />
                    </IconButton>

                    {/* AI Box Logo */}
                    <Box component="img" src={logo} alt="logo" sx={{ height: { xs: '32px', sm: '43px' } }} />

                    {/* Search */}
                    <Search
                        sx={{
                            ml: '32px !important',
                            width: '100% !important',
                            height: '42px',
                            'div:last-of-type': { height: '100%', width: '100%' },
                            border: '1px solid #DDDEE0',
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <SearchIconWrapper
                            sx={{ paddingLeft: '8px', pointerEvents: 'unset', zIndex: 1, cursor: 'pointer' }}
                        >
                            <SearchIcon sx={{ color: '#9AA3AA', height: '17px' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search apps, categories, accounts"
                            inputProps={{
                                'aria-label': 'search',
                                height: '100%',
                                sx: {
                                    paddingLeft: 'calc(1em + 24px) !important',
                                    width: '100% !important',
                                },
                            }}
                        />
                    </Search>

                    {/* Mobile only search icon */}
                    <SearchIcon
                        sx={{
                            color: '#81848F',
                            height: '32px',
                            fontSize: '32px',
                            display: { xs: 'block', sm: 'none' },
                            marginLeft: 'auto',
                            marginRight: '-5px',
                            cursor: 'pointer',
                        }}
                    />

                    {/* Build and Sandbox */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                lineHeight: '22.5px',
                                mr: '25px',
                                ml: '10px',
                            }}
                        >
                            Build
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                lineHeight: '22.5px',
                                mr: '8px',
                            }}
                        >
                            Sandbox
                        </Typography>
                    </Box>

                    {/* Menu avatar */}
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        id="primary-search"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <Avatar
                            sx={{
                                width: { xs: 32, sm: 42 },
                                height: { xs: 32, sm: 42 },
                                background: ' #6453FF',
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: { xs: '1.125rem', sm: '1.5rem' },
                            }}
                        >
                            P
                        </Avatar>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    )
}

// ** Styled Components

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))
