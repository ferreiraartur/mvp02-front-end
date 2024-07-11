import React, { useState } from 'react';
import { Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import CartModal2 from '../components/CartModal2';

function PageTeste(){

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      <Toolbar> </Toolbar>
      <Toolbar> </Toolbar>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
    
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
        <CartModal2 sx={{ p: 2 }}  anchorEl={anchorEl} handleClose={handleClose} id={id}> </CartModal2>
        
      
    </div>
  );
}

export default PageTeste;
