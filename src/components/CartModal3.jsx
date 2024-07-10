import React, { useState } from 'react';
import { Button, Popover, Typography, Grid } from '@mui/material';

const CartModal3 = ({ openModal3, handleClose,id }) => {
  const open = Boolean(openModal3);



  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onMouseEnter={() => {
        // Manter o popover aberto quando o mouse está sobre ele
      }}
      onMouseLeave={handleClose}
    >
      <Grid container spacing={2} sx={{ p: 2, maxWidth: 400 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            O seu carrinho está vazio.
            Continue navegando para encontrar o seu curso!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="error" fullWidth onClick={handleClose}>
            Close Cart
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default CartModal3;
