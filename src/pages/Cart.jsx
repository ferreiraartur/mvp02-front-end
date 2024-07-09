import { useState, createContext, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Toolbar,CardMedia } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../contextAPI/CartContext";



function Cart(){
    
    const { carrinho,adicionarAoCarrinho,getTotal } = useContext(CartContext);
    
    
    const handleClick = () => {
        // Lógica para manipular o clique do botão
    console.log('Botão clicado!');
    };

    return (
        <Grid container spacing={2}>
            <LeftBar />
            {/* Conteúdo principal */}
            <Grid item xs={7}>
                <Toolbar />
                <Toolbar />
                <Typography variant="h4">{carrinho.length} Curso(s) no carrinho</Typography>
                <List>                  
                     {carrinho.map((course) => ( 
                    <ListItem key={course.id}>
                        <Card sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <CardMedia
                                        sx={{ width: '180px', height: '150px' }} 
                                        component="img"
                                        image={course.imageUrl}
                                        alt={course.title}>
                                    </CardMedia>
                                </Grid>

                                <Grid item xs={10}>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {course.title}
                                        </Typography>
                                        <Typography variant="body1" component="div">
                                            {course.content}
                                        </Typography>
                                        <Typography variant="h7">
                                            Preço: R$ {course.price}
                                        </Typography>
                                        

                                        <Grid item xs={12} container justifyContent="flex-end">  
                                            <Button  onClick={handleClick} variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
                                                remover
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </ListItem>
                     ))}
                </List>

                

            </Grid>

            {/* resumo do pedido */}
            <Grid item xs={2}>
            <Toolbar />
                <Toolbar />
                <Typography variant="h4">Resumo do pedido </Typography>
                <Card sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <CardContent>
                                        <Typography variant="h6" component="div">
                                            Resumo de compra
                                        </Typography>
                                        <Typography variant="body1" component="div">
                                            Subtotal: ${getTotal()}
                                        </Typography>
                                        
                                        <Typography variant="h7">
                                            Total: ${getTotal()} 
                                        </Typography>
                                        

                                        <Grid item xs={12} container justifyContent="flex-end">  
                                            <Button  size="small" component={Link} to="/checkout" onClick={handleClick} variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
                                                Ir para pagamento
                                            </Button>
                                        </Grid>
                                </CardContent>

                            </Grid>
                </Card>


            </Grid>
            

            

            <RightBar />
        </Grid>

    )
}

export default Cart;