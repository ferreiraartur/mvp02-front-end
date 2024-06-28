import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx';
import Box1 from './components/Box1.jsx';
//import Cards from './components/Cards.jsx.old';
import Header from './components/Header.jsx';
import BannerSlider from './components/BannerSlider.jsx'
import Footer from './components/Footer.jsx';
import { Container, Grid, Paper, Toolbar } from '@mui/material';
import CourseCarousel from './components/CourseCarousel.jsx';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      
    ].join(','),
  },
});

const logoStyles = {
  
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '6rem',
  height: '3rem'
  
};



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


function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ marginTop: '64px', height: '150vh' }}>
          <main>
            
            <BannerSlider />
            <Toolbar />
            <ThemeProvider theme={theme}>
            <Typography align="center"
                  variant="h6"
                  noWrap
                  component="div"
      
                  sx={{ borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Explore os nossos cursos.</Typography>

                <Typography align="center"
                  variant="h6"
                  noWrap
                  component="div"
      
                  sx={{ borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Crie a sua carreira dentro de 6 meses.</Typography>
            </ThemeProvider>
            <Toolbar />
              <CourseCarousel courses={courses} />
            
            <Footer />
          </main>
       
     </Container>
    </>
    
  )
}

export default App
