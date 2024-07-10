import React, { useState, createContext, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Toolbar } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'
import { Outlet, Link } from "react-router-dom";
import {FormControl, TextField, Divider} from '@mui/material'
import Pagamento from '../components/Pagamento'
import { CartContext } from "../contextAPI/CartContext";

function Checkout(){

    const [openModal, setOpenModal] = useState(false);

    const { getTotal,handleClearCart } = useContext(CartContext);
    
    const handleOpenModal = () =>{
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const [formData, setFormData] = useState({
        titular: '',
        numeroCartao: '',
        vencimento: '',
        cvv: '',
        nome: '',
        sobrenome: '',
        email: '',
        endereco: '',

    });

    const [formErrors, setErrors] = useState({
        titular: false,
        numeroCartao: false,
        vencimento: false,
        cvv: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    



    const handleSubmit = (e) => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
        e.preventDefault();

        const errors = {};
        if (formData.titular == ''){
            errors.titular = true;
        }
        if (formData.numeroCartao == '') {
            errors.numeroCartao = true;
        }
        if (formData.vencimento == ''){
            errors.vencimento = true;
        }
        if (formData.cvv == ''){
            errors.cvv = true;
        }
        if (formData.nome == ''){
            errors.nome = true;
        }
        if (formData.sobrenome == ''){
            errors.sobrenome = true;
        }
        if (formData.email == ''){
            errors.email = true;
        }
        if (formData.endereco == ''){
            errors.endereco = true;
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log ('Dados do formulário: ', formData);
            setFormData({
                titular: '',
                numeroCartao: '',
                vencimento: '',
                cvv: '',
                nome: '',
                sobrenome: '',
                email: '',
                endereco: '',
            });
            handleOpenModal();
            handleClearCart();
            }
        
      };

      const handleClick = () => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
        
      };

    return (
        <Grid container spacing={2}>
            <LeftBar />

            {/* Conteúdo principal */}

            <Grid item xs={4}>
                <Toolbar />
                <Toolbar />
                <Typography variant="h4">Checkout</Typography>
                <Card sx={{ width: '100%' }}>
                    <Grid item xs={9}>
                        
                        <Typography variant="h6" component="div">Aceitamos todos os cartões de crédito</Typography>

                    </Grid>
                </Card>
                <Toolbar />
                <Card sx={{ width: '100%' }}>
                    <Typography variant="h6" component="div">Detalhes de pagamento</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid item xs={11}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Nome titutar cartão"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="titular"
                                    value={formData.titular}
                                    onChange={handleChange}
                                    error={formErrors.titular}
                                    helperText={formErrors.titular ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Número do cartão"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="numeroCartao"
                                    value={formData.numeroCartao}
                                    onChange={handleChange}
                                    error={formErrors.numeroCartao}
                                    helperText={formErrors.numeroCartao ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="MM/YY"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="vencimento"
                                    value={formData.vencimento}
                                    onChange={handleChange}
                                    error={formErrors.vencimento}
                                    helperText={formErrors.vencimento ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="CVV"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    error={formErrors.cvv}
                                    helperText={formErrors.cvv ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                            <Typography variant="h7" component="div">We do not store your credit card information.</Typography>

                        </Grid>
                    </form>
                </Card>

                <Toolbar />

                {/* Billing*/}
                <Card sx={{ width: '100%' }}>
                    <form >
                        <Grid item xs={11}>
                            <Typography variant="h7" component="div">Detalhes de pagamento</Typography>
                            <FormControl fullWidth>
                                <TextField
                                    label="Primeiro nome"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    error={formErrors.nome}
                                    helperText={formErrors.nome ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Segundo nome"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="sobrenome"
                                    value={formData.sobrenome}
                                    onChange={handleChange}
                                    error={formErrors.sobrenome}
                                    helperText={formErrors.sobrenome ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="e-mail"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={formErrors.email}
                                    helperText={formErrors.email ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Endereço"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="endereco"
                                    value={formData.endereco}
                                    onChange={handleChange}
                                    error={formErrors.endereco}
                                    helperText={formErrors.endereco ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                            

                        </Grid>
                    </form>
                </Card>
                </Grid>

                {/*  resumo*/}
                <Grid item xs={5}>
                    <Toolbar />
                    <Toolbar />
                    
                
                <Toolbar />
                <Card sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <CardContent>
                                        <Typography variant="h4" component="div">
                                            Resumo do pedido
                                        </Typography>
                                        <Divider variant="fullWidth" />
                                        
                                        <Typography variant="body1" component="div">
                                            Subtotal: ${getTotal()}
                                        </Typography>
                                        
                                        <Typography variant="h7">
                                            Desconto: 
                                        </Typography>
                                        <Divider variant="fullWidth" />
                                        <Typography variant="h7">
                                            R$ ${getTotal()}
                                        </Typography>
                                        
                                        <Toolbar />
                                        <Grid item xs={12} container >  
                                            <Button   onClick={handleSubmit} variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
                                                Pague agora
                                            </Button>
                                            <Pagamento open={openModal} handleClose={handleCloseModal} />
                                        </Grid>
                                </CardContent>

                            </Grid>
                </Card>


            

            </Grid>

            <RightBar />
        </Grid>

    )
}

export default Checkout;