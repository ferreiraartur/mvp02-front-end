import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';



function LeftBar(){

    return (
        <Grid item xs={1.5}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Left Bar
          </Typography>
          <Divider />
          
        </Drawer>
      </Grid>

    )
}

export default LeftBar;