import React, {  useContext } from 'react';
import { Button, Popover, Typography, Grid,CardContent,Card,CardHeader,CardActions } from '@mui/material';
import { CartContext } from "../contextAPI/CartContext";
import {  Link } from "react-router-dom";

const CartModal2 = ({ anchorEl, handleClose,id }) => {
  const open = Boolean(anchorEl);

  const { carrinho,setCarrinho, getTotal} = useContext(CartContext);

  const handleDeleteItem = (id) => {
    const updatedItems = carrinho.filter(item => item.id !== id);
    setCarrinho(updatedItems);
  };



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

export default CartModal2;
