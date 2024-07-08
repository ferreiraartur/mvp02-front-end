import React, { useState, createContext, useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Toolbar,CardMedia } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'
import NavBar from  '../components/NavBar'
import dados from '../dados.json'
import Cart from '../pages/Cart'

// 3 - Consumir o contexto
//import { Contexto } from '../contexts/MyContext';
import { CartContext } from "../contextAPI/CartContext";

// 1 - Criar um contexto
//export const Contexto = createContext();


  

function Courses(){

  const { count,carrinho,adicionarAoCarrinho } = useContext(CartContext);

 // const carrinho = useMyContext();
  //const { handleClick}  = useMyContext();

  //const calcularTotal = () => {
   // return carrinho.reduce((total, course) => total + course.price, 0);
 // };

 // const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [courses, setCourses] = useState([]);

 // const [carrinho, setCarrinho] = useState([]);

  //const adicionarAoCarrinho = (course) => {
 //   setCarrinho([...carrinho, course]);
    //console.log ("teste123" + course.title);
    //console.log ("teste124" + carrinho.title);

  //  carrinho.map((course) => (
  //    console.log("teste1234" + course.title)
  //  ))

 //   handleClick();
  
 //};

  

  useEffect(() => {
    setCourses(dados.courses)
  }, []);




 // const handleClick = () => {
    // Lógica para manipular o clique do botão
  //  console.log('Botão clicado!');

  //  setCount(setCount => count + 1)
    //setDisabled(true);
    
 // };

  return (
    <>
      {/**
      <section>
        <Contexto.Provider value={{count, carrinho }}>
            {children}
            
        </Contexto.Provider>

        
      </section>
       */}

    <Grid container spacing={2}>
      {/* leftBar (Drawer esquerdo) */}
      <LeftBar />
      
      {/* Conteúdo principal */}

      <Grid item xs={9}>
        <Toolbar />
        <Typography variant="h4">Listagem de Cursos</Typography>
        
        <List>
          { courses.map((course) => (
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
                      
                  
                      
                      <Button onClick={() => adicionarAoCarrinho(course)} variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
                       Comprar
                       
                      </Button>
                      {console.log("testando" +carrinho)}
                  </Grid>
                 </CardContent>
                </Grid>
              </Grid>
              </Card>
            </ListItem>
          ))}
        </List>
      </Grid>

     

      {/* rightBar (Drawer direito) */}
      <RightBar />
    </Grid>
    </>
  );
  
};

export default Courses;