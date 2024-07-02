import React from 'react';
import { Card, CardContent, Typography, CardMedia,CardActionArea, CardActions, Button, Grid, Box} from '@mui/material';
import { Outlet, Link } from "react-router-dom";

const CourseCards = ({ course }) => {
  return (
   <div style={{ padding: 15 }} >
    
    <Card style={{ width: 300, height: 250 }} sx={{   borderRadius: 5}}>
    <CardActionArea>
      <CardMedia
        height= "160" 
        component="img"
        image={course.imageUrl}
        alt={course.name}>
      </CardMedia>
      <hr></hr>
      
      <CardContent>
        <Typography variant="h5" component="div">
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
        
      </CardContent>

      </CardActionArea>
      <CardActions>
        <Button component={Link} to="/courses" size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
      
      
    </Card>
    <Outlet /> 
    
</div>
    
    
  );
};

export default CourseCards;
