import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Toolbar,CardMedia } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'

// Exemplo de dados para os cards
const cards = [
    { id: 1, category: 'DevOps', title: 'Docker Certified Associate', content: 'This Docker training course is intended for the learners who is preparing for the Docker Certified Associate (DCA) certification exam.', imageUrl: '/src/assets/courses/course01.png'  },
    { id: 2, category: 'DevOps', title: 'System Administration Using Puppet', content: 'Conteúdo do Card 2', imageUrl: '/src/assets/courses/course02.png' },
    { id: 3, category: 'DevOps', title: 'System Administration Using Ansible', content: 'Conteúdo do Card 3', imageUrl: '/src/assets/courses/course03.png'},
    { id: 4, category: 'Linux', title: 'Card 4', content: 'Conteúdo do Card 4', imageUrl: '/src/assets/courses/course04.png'},
    { id: 5, category: 'Linux', title: 'Card 5', content: 'Conteúdo do Card 5', imageUrl: '/src/assets/courses/course01.png'},
    { id: 6, category: 'Linux', title: 'Card 6', content: 'Conteúdo do Card 6', imageUrl: '/src/assets/courses/course01.png'},
    { id: 7, category: 'Cloud', title: 'Card 7', content: 'Conteúdo do Card 7', imageUrl: '/src/assets/courses/course01.png'},
    { id: 8, category: 'Cloud', title: 'Card 8', content: 'Conteúdo do Card 8', imageUrl: '/src/assets/courses/course01.png'},
    { id: 9, category: 'Cloud', title: 'Card 9', content: 'Conteúdo do Card 9', imageUrl: '/src/assets/courses/course01.png' },
    { id: 10, category: 'Seguranca', title: 'Card 10', content: 'Conteúdo do Card 10', imageUrl: '/src/assets/courses/course01.png'},
    { id: 11, category: 'Seguranca', title: 'Card 11', content: 'Conteúdo do Card 11', imageUrl: '/src/assets/courses/course01.png'},
    { id: 12, category: 'Seguranca', title: 'Card 12', content: 'Conteúdo do Card 12', imageUrl: '/src/assets/courses/course01.png'},
    { id: 13, category: 'Java', title: 'Card 13', content: 'Conteúdo do Card 13', imageUrl: '/src/assets/courses/course01.png' },
    { id: 14, category: 'Java', title: 'Card 14', content: 'Conteúdo do Card 14', imageUrl: '/src/assets/courses/course01.png'},
    { id: 15, category: 'Java', title: 'Card 15', content: 'Conteúdo do Card 15', imageUrl: '/src/assets/courses/course01.png'},
    { id: 16, category: 'Python', title: 'Card 16', content: 'Conteúdo do Card 16', imageUrl: '/src/assets/courses/course01.png' },
    { id: 17, category: 'Python', title: 'Card 17', content: 'Conteúdo do Card 17', imageUrl: '/src/assets/courses/course01.png'},
    { id: 18, category: 'Python', title: 'Card 18', content: 'Conteúdo do Card 18', imageUrl: '/src/assets/courses/course01.png'},
  ];

  

function Courses(){



  return (
    <Grid container spacing={2}>
      {/* leftBar (Drawer esquerdo) */}
      <LeftBar />

      {/* Conteúdo principal */}

      <Grid item xs={9}>
        <Toolbar />

        <Typography variant="h4">Listagem de Cards</Typography>
        <List>
          {cards.map((card) => (
            <ListItem key={card.id}>
              <Card sx={{ width: '100%' }}>
                <Grid container spacing={2}>

                  <Grid item xs={2}>

                    <CardMedia
                
                      sx={{ width: '100%', height: 140 }} 
                      component="img"
                      image={card.imageUrl}
                      alt={card.title}>
                
                    </CardMedia>
                  </Grid>

                <Grid item xs={10}>
                 <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {card.content}
                  </Typography>
                  <Grid item xs={12} container justifyContent="flex-end">
                      <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
                       Comprar
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

      {/* rightBar (Drawer direito) */}
      <RightBar />
    </Grid>
  );
};

export default Courses;