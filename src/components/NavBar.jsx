//import logo from '../assets/logo.png';
import React, { useState, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import CartModal2 from '../components/CartModal2';

// 3 - Consumir o contexto
//import { Contexto } from '../contexts/MyContext';
import { CartContext } from "../contextAPI/CartContext";

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

  

  

function NavBar() {

  // 4 - Usar o contexto
  const { carrinho,handleOpenCart,handleCloseCart,open } = useContext(CartContext);
  const id = open ? 'simple-popover' : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  
  

    return (
      <>
        <React.Fragment>
          <CssBaseline />
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
                    <MenuItem> 
                   
    
                      <IconButton 
                        aria-describedby={id} variant="contained" onClick={handleClick}


                        size="large" aria-label="show 4 itens" color="inherit" >
              
                        <Badge            
                          badgeContent={carrinho.length} color="error">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                      <CartModal2 sx={{ p: 2 }}  anchorEl={anchorEl} handleClose={handleClose} id={id}> </CartModal2>
                      <Button sx={{ ...loginStyles, borderRadius: '16px' }} color="inherit">Sign in</Button>
                      <Button sx={{ ...loginStyles, borderRadius: '16px' }}  color="inherit"><b>Sign up</b></Button>
            
        
                    </MenuItem>
                  </Box>
      
                </Toolbar>
              </AppBar>
          
                <Outlet /> 
            </Box>
        </React.Fragment>

       
        </>
    )
}

export default NavBar;