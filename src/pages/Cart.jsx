import React, { useState, createContext, useContext } from 'react';
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
import { Outlet, Link } from "react-router-dom";
import { Contexto } from '../pages/Courses'

//import courses from '../courses.json'

function Cart(){

    //const [courseList, setCourseList]  = useContext(Contexto);
    const courses = useContext(Contexto);
    
/*
    const cards = [
        { id: 1, category: 'DevOps', title: 'Docker Certified Associate', price: '29.99', content: 'This Docker training course is intended for the learners who is preparing for the Docker Certified Associate (DCA) certification exam.', imageUrl: '/src/assets/courses/course01.png'  },
        { id: 2, category: 'DevOps', title: 'System Administration Using Puppet',price: '19.99', content: 'Puppet Certification validates the skills of system administrators in administrating system infrastructure and developing basic modules using Puppet.', imageUrl: '/src/assets/courses/course02.png' },
        { id: 3, category: 'DevOps', title: 'System Administration Using Ansible', price: '19.99',content: 'Learn how to use Ansible to automate management and deployment of the systems in an enterprise environment by simply taking this course.', imageUrl: '/src/assets/courses/course03.png'},
        { id: 4, category: 'Linux', title: 'Card 4', content: 'Conteúdo do Card 4',price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 5, category: 'Linux', title: 'Card 5', content: 'Conteúdo do Card 5', price: '19.99',imageUrl: '/src/assets/courses/course01.png'},
        { id: 6, category: 'Linux', title: 'Card 6', content: 'Conteúdo do Card 6', price: '19.99',imageUrl: '/src/assets/courses/course01.png'},
        { id: 7, category: 'Cloud', title: 'Card 7', content: 'Conteúdo do Card 7', price: '19.99',imageUrl: '/src/assets/courses/course01.png'},
        { id: 8, category: 'Cloud', title: 'Card 8', content: 'Conteúdo do Card 8', price: '19.99',imageUrl: '/src/assets/courses/course01.png'},
        { id: 9, category: 'Cloud', title: 'Card 9', content: 'Conteúdo do Card 9', price: '19.99',imageUrl: '/src/assets/courses/course01.png' },
        { id: 10, category: 'Seguranca', title: 'Card 10', content: 'Conteúdo do Card 10', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 11, category: 'Seguranca', title: 'Card 11', content: 'Conteúdo do Card 11',price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 12, category: 'Seguranca', title: 'Card 12', content: 'Conteúdo do Card 12', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 13, category: 'Java', title: 'Card 13', content: 'Conteúdo do Card 13',price: '19.99', imageUrl: '/src/assets/courses/course01.png' },
        { id: 14, category: 'Java', title: 'Card 14', content: 'Conteúdo do Card 14', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 15, category: 'Java', title: 'Card 15', content: 'Conteúdo do Card 15', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 16, category: 'Python', title: 'Card 16', content: 'Conteúdo do Card 16', price: '19.99', imageUrl: '/src/assets/courses/course01.png' },
        { id: 17, category: 'Python', title: 'Card 17', content: 'Conteúdo do Card 17', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
        { id: 18, category: 'Python', title: 'Card 18', content: 'Conteúdo do Card 18', price: '19.99', imageUrl: '/src/assets/courses/course01.png'},
      ];

*/

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
                <Typography variant="h4">0 Curso(s) no carrinho</Typography>
                <List>
                     {courses.map((course) => ( 
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
                                            Subtotal
                                        </Typography>
                                        <Typography variant="h7">
                                            Desconto: 
                                        </Typography>
                                        <Typography variant="h7">
                                            R$ 
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