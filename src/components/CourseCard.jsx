import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const CourseCards = ({ course }) => {
  return (
    <div style={{ padding: 15 }} >
    <Grid container spacing={2} justify="center" >
      
    <Card sx={{  borderRadius: 5,width: '100%' }}>
      <CardMedia
        component="img"
        height="150"
        image={course.imageUrl}
        alt={course.name}
      />
      <hr></hr>
      <CardContent>
        <Typography variant="h5" component="div">
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
    </Card>
    
    </Grid>
    </div>
    
  );
};

export default CourseCards;
