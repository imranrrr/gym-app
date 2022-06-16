import React from 'react';
import { Grid, Button } from '@mui/material';



function Subtotal() {
  return (
    <Grid className='subtotal'>
      <p>Subtotal
        <span> (0 items)</span>
        <strong>
          <span> $</span>
          <span>0.00</span>
        </strong>
      </p>
      <Button variant="contained">Pay Now</Button>
    </Grid>
  );
}

export default Subtotal;
