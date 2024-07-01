import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const cardData = [
  { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
  { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
  { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
];

function Courses(){

    return (
        
        <Grid container spacing={2}>
            {cardData.map((card) => (
        <Grid item key={card.id} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body1" component="div">
                {card.content}
              </Typography>
              <Grid item xs={12} container justifyContent="flex-end">
              <Button variant="contained" color="primary">
                Adicionar carrinho
              </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    )
}

export default Courses;
