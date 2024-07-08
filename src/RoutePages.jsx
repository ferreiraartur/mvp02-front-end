import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Courses from "./pages/Courses.jsx"
import Cart from "./pages/Cart.jsx"
import Checkout from "./pages/Checkout.jsx"
import NoPage from "./pages/NoPage";
import PageTeste from "./pages/PageTeste.jsx";
import Layout  from "./components/Layout.jsx";




function RoutePages(){
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="pageteste" element={<PageTeste />} />
                </Route>
            </Routes>         
       </BrowserRouter>

    )
}

export default RoutePages