import React, { useState, useContext } from 'react';
import { Button, Typography, Grid, Card, CardActions, CardContent, CardHeader, Popover } from '@mui/material';
import { CartContext } from "../contextAPI/CartContext";



const CartModal = ({ anchorEl, handleClose }) => {

    const { carrinho,adicionarAoCarrinho } = useContext(CartContext);
  

    const getTotal = () => {
      return carrinho.reduce((total, item) => total + item.price , 0);
    };



  return (
    <Popover
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
              <CardHeader title={item.name} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Price: ${item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleAddItem(item.id)} variant="outlined" size="small">+</Button>
                <Button onClick={() => handleRemoveItem(item.id)} variant="outlined" size="small">-</Button>
                <Button onClick={() => handleDeleteItem(item.id)} variant="outlined" size="small">Remove</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h6" align="right">
            Total: ${getTotal()}
          </Typography>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default CartModal;