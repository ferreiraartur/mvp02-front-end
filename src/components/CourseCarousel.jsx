import React from 'react';
import Slider from 'react-slick';
import { Grid } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from '../components/CourseCard.jsx';

const CourseCarousel = ({ courses }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <Slider {...settings}> 
          
      {courses.map((course) => (
        <Grid key={course.id} item >
          <CourseCard course={course} />
        </Grid>
      ))}
      
    </Slider>
  );
};

export default CourseCarousel;
