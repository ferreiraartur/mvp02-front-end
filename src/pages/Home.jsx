import React from "react";
import NavBar from '../components/NavBar.jsx';
import Layout  from "../components/Layout.jsx";
import BannerSlider from '../components/BannerSlider.jsx'
import CourseCarousel from '../components/CourseCarousel.jsx';
import Sentence from '../components/Sentence.jsx';
import Toolbar from '@mui/material/Toolbar';

const courses = [
    {
      id: 1,
      name: 'DevOps',
      description: 'DevOps t',
      imageUrl: '/src/assets/cards/card01.png',
      
      
    },
    {
      id: 2,
      name: 'Linux',
      description: 'Linux t',
      imageUrl: '/src/assets/cards/card02.png',
    },
    {
      id:3,
      name: 'Cloud',
      description: 'Cloud t',
      imageUrl: '/src/assets/cards/card03.png',
    },
    {
      id: 4,
      name: 'Segurança',
      description: 'Segurança t',
      imageUrl: '/src/assets/cards/card04.png',
    },
    {
      id: 5,
      name: 'Java',
      description: 'Java t',
      imageUrl: '/src/assets/cards/card05.png',
    },
    { id: 6,
      name: 'Python',
      description: 'Python t',
      imageUrl: '/src/assets/cards/card06.png',
    },
    // Adicione mais cursos conforme necessário
  ];

function Home(){

    return (
        <>
            
            <BannerSlider />
            <Toolbar />
            <Sentence />
            <Toolbar />
            <CourseCarousel courses={courses} />
        </>
    )
}

export default Home;
