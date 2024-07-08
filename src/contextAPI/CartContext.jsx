import React, { createContext, useContext, useState } from 'react';


// 1 - Criar um contexto
const CartContext = createContext();


  

const CartProvider = ({ children }) => {

    //const [count, setCount] = useState(0);
    const [carrinho, setCarrinho] = useState([]);

    const handleClick = () => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
    
        setCount(setCount => count + 1)
        //setDisabled(true);
        
      };

      const adicionarAoCarrinho = (course) => {
        setCarrinho([...carrinho, course]);
    
        carrinho.map((course) => (
          console.log("teste1234" + course.title)
        ))
    
        //handleClick();
      
     };


    return (
        <>
        <CartContext.Provider  value={{  adicionarAoCarrinho,carrinho, setCarrinho}}>
            {children}
        </CartContext.Provider>
        
        
        </>

    );
  };
  export { CartContext, CartProvider };