import React, { useState, createContext, useContext } from 'react';
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Grid from '@mui/material/Grid';
import CountContext from '../components/CartItem'
import NavBar from '../components/NavBar'
import Courses from '../pages/Courses'

function NoPage(){
    // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Botão clicado!');
  };
    


    return (
        <div>
            
      <p>Você clicou {count} vezes</p>
      <NavBar count={count}> </NavBar>
     

      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
    )
}

export default NoPage;