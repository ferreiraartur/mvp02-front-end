import React from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Grid from '@mui/material/Grid';


function NoPage(){
    return (
        
        <Grid container spacing={2}>
            <LeftBar />
            
            {/* Conteúdo principal */}
            <div>
                <br></br>
                <br></br>
                <h1>404 Not Found</h1>
                <p>A página que você está procurando não foi encontrada.</p>
            </div>

            <RightBar />
        </Grid>

    )
}

export default NoPage;