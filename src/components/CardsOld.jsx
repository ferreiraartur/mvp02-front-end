import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { Container, Grid, Paper } from '@mui/material';



function CourseCard(){
    return (
        <Grid container spacing={12}>
            <Grid item xs={7}>
        <Card sx={{ maxWidth: 300,borderRadius: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180px"
          width="100px"
          
          image="/src/assets/cards/card01.png"
          alt="dev ops"
        />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DevOps
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={5}>
    <Card sx={{ maxWidth: 300,borderRadius: 10 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="180px"
                width="100px"
                image="/src/assets/cards/card02.png"
                alt="dev ops"
            />
        <hr></hr>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Linux
            </Typography>
    
        </CardContent>
        </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    )
}

export default CourseCard;
