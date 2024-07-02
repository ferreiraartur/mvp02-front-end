import React from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Grid from '@mui/material/Grid';

function Checkout(){
    return (
        <Grid container spacing={2}>
            <LeftBar />

            {/* Conteúdo principal */}

            <RightBar />
        </Grid>

    )
}

export default Checkout;