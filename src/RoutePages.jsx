import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Courses from "./pages/Courses.jsx"
//import NoPage from "./pages/NoPage";
import Layout  from "./components/Layout.jsx";



function RoutePages(){
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Courses />} />
                   {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>          
       </BrowserRouter>

    )
}

export default RoutePages