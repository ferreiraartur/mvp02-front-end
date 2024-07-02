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
import { Toolbar } from '@mui/material';


// Exemplo de dados para os cards
const cards = [
    { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
    { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
    { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
  ];

function Courses(){



  return (
    <Grid container spacing={2}>
      {/* leftBar (Drawer esquerdo) */}
      <Grid item xs={1.5}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Left Bar
          </Typography>
          <Divider />
          
        </Drawer>
      </Grid>

      {/* Conteúdo principal */}
      <Grid item xs={9}>
        <Toolbar />

        <Typography variant="h4">Listagem de Cards</Typography>
        <List>
          {cards.map((card) => (
            <ListItem key={card.id}>
              <Card sx={{ width: '100%' }}>
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
              </Card>
            </ListItem>
          ))}
        </List>
      </Grid>

      {/* rightBar (Drawer direito) */}
      <Grid item xs={3}>
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Right Bar
          </Typography>
          <Divider />
          
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Courses;