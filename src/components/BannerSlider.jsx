import React, {useState, useEffect} from "react";
import Banner from './Banner.jsx';
import {Box, IconButton} from '@mui/material';
import './BannerSlider.css'
import { ArrowForward } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';






const BannerSlider = () => {

    

    const banners = [
        'src/assets/banner1.png',
        'src/assets/banner2.png',
        'src/assets/banner3.png',
    ];

    const [currentBanner, setCurrentBanner] = useState(0);

    const nextBanner = () => {
        setCurrentBanner((currentBanner + 1) % banners.length);
    };

    const prevBanner = () => {
        setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner();
        }, 3000); // Change interval duration (in milliseconds) as needed

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentBanner]);

    return (
        
       



        
        <div className="banner-slider">
            <button onClick={prevBanner}>Previous</button>

            <Banner banner={banners[currentBanner]} />
            

               
                <button  onClick={nextBanner}>Next</button>
                
                <IconButton
        aria-label="arrow-forward"
        sx={{
          color: '#FFFFFF', // Cor do ícone da seta
          backgroundColor: '#FFDD00', // Cor do botão de fundo amarelo
          borderRadius: '50%', // Botão redondo (círculo)
          padding: '8px', // Espaçamento interno
          '&:hover': {
            backgroundColor: '#d3d3d3', // Cor do botão de fundo amarelo escuro ao passar o mouse
          },
        }}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: 32 }} />
      </IconButton>
            
           
           
            
        </div>
       
    );   
};

export default BannerSlider;