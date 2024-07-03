import React, { useState, createContext, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './NavBar';
import Courses from '../pages/Courses';
import Cart from '../pages/Cart';
import NoPage from "../pages/NoPage";



function CartItem({id, title, price, quantity}) {

        

    const [itemQuantity, setItemQuantity] = useState(quantity); 

    const [count, setCount] = useState(0);
    

        const decreaseItem = () => {
            if (itemQuantity >1){
                setItemQuantity(itemQuantity - 1)
            }   
        };

        const increaseItem = () => {
            setItemQuantity(itemQuantity + 1)
        };

    return (
        <>

        
        
        </>
    );
};

export default CartItem;