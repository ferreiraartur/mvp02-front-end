import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "../contextAPI/CartContext";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Toolbar,CardMedia } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'
import dados from '../dados.json'


function CourseList(){

    const { carrinho,adicionarAoCarrinho } = useContext(CartContext);
    const {category} = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      setCourses(dados.courses)
    }, []);

    
    const filteredCourses= courses.filter(course => course.category === category);

    

    return (
        <>
         
        <Toolbar></Toolbar>
        <Grid container spacing={2}>
          {/* leftBar (Drawer esquerdo) */}
          <LeftBar />
          
          {/* Conteúdo principal */}
    
          <Grid item xs={9}>
            <Toolbar />
            <Typography variant="h4">Listagem de Cursos</Typography>
            
            <List>
              { filteredCourses.map((course) => (
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

export default CourseList;