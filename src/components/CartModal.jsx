import React, { useState, useContext } from 'react';
import { Button, Typography, Grid, Card, CardActions, CardContent, CardHeader, Popover } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../contextAPI/CartContext";

function CartModal() {
  
 

  const { carrinho,setCarrinho, adicionarAoCarrinho,getTotal,anchorEl,handleClose } = useContext(CartContext);

  const handleDeleteItem = (id) => {
    const updatedItems = carrinho.filter(item => item.id !== id);
    setCarrinho(updatedItems);
  };

  return (
    <Popover
    id="mouse-over-popover"
    sx={{
      pointerEvents: 'none',
    }}
      open={Boolean(anchorEl)}
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
      disableRestoreFocus
        
    >
      <Grid container spacing={2} sx={{ p: 2, maxWidth: 400 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
        </Grid>
        {carrinho.map(item => (
          <Grid item key={item.id} xs={12}>
            <Card>
              <CardHeader title={item.title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Price: ${item.price}
                </Typography>
                
              </CardContent>
              <CardActions>
                
                <Button onClick={() => handleDeleteItem(item.id)} variant="outlined" size="small">Remove</Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h6" align="right">
            Total: ${getTotal()}
          </Typography>
          <Button component={Link} to="/cart" variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
            Continuar           
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default CartModal;
