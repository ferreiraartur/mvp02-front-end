import React, { useState, createContext, useContext } from 'react';
import NavBar from '../components/NavBar'


export const CountTesteContext = createContext();

function PageTeste(){

    const [testeCount, setTesteCount] = useState(0);
    

    return (
        <>
        
        <CountTesteContext.Provider value={{ testeCount, setTesteCount }}>
            <div>
            <p>Você clicou {testeCount} vezes</p>
      <NavBar testeCount={testeCount}> </NavBar>
      <button onClick={() => setTesteCount(testeCount + 1)}>
        Clique aqui
      </button>
                
                <NavBar />
                
            </div>
        </CountTesteContext.Provider>
        
        </>
    )
}

export default PageTeste;