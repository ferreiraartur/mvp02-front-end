//import logo from '../assets/logo.png';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import CartItem from './CartItem';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      
    ].join(','),
  },
});

const loginStyles = {
  
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '6rem',
  height: '3rem',
  
};

const logoStyles = {
  
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '6rem',
  height: '3rem'
  
};

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
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '40ch',
      },
    },
  }));

function NavBar(props) {

    return (
       /* <header id="header"> 
            {/* <img src={logo} alt="logo do site"/> 
            <h1>Treinamento</h1>
            
        </header>
    */
        
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <Stack direction="row" alignItems="center">  

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ThemeProvider theme={theme}>
                <Typography
                  align="center"
                  variant="h6"
                  noWrap
                  component="div"
                   
                  
                  sx={{ ...logoStyles,borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                ><b>
                    KIAINFO
                    
                    
                  </b>
                </Typography>
                </ThemeProvider>
              </Box>
          
          
            </Stack>
           <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            
            <StyledInputBase
              
              placeholder="O que gostaria de aprender?"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                width: '400px'
              }}
              
            />

           </Search>
           <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <MenuItem
            
           >
             <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
              
            </li>
            
          </ul>
              console.log(CartItem.quantity);
             <IconButton size="large" aria-label="show 4 itens" color="inherit" >
              <Badge badgeContent={props.CartItem} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            
            <Button sx={{ ...loginStyles, borderRadius: '16px' }} color="inherit">Sign in</Button>
            <Button sx={{ ...loginStyles, borderRadius: '16px' }}  color="inherit"><b>Sign up</b></Button>
            
        
           </MenuItem>
           </Box>
      
            </Toolbar>
          </AppBar>
          <Toolbar /> 
          <Outlet /> 
        </Box>

        
    
    )
}

export default NavBar;