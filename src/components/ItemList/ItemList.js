import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Item/Product';

export default function ItemList() {
  
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Product />
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
