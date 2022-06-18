import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../../../Components/Page/Page';
import Subtotal from '../Subtotal';
import Product from '../Product';

const Cart = () => {
  return (
    <Page>
      <Grid sx={{marginTop:"4rem", marginRight:"2rem", marginLeft:"2rem", marginBottom:"5rem"}} >
        <div className='cart'>
          <div className='cart__image'>
            <img src={require("../../../../assets/gym-cart-1.jpg")} alt='' />
            <Subtotal className="cart__subtotal" />
          </div>
        </div>
        <div className='cart__shoppingDetails'>
          <p>Hello, <span>User</span></p>
          <h1>Your Shopping Basket</h1>
        </div>
        <Product />
      </Grid>
    </Page>
  );
}

export default Cart;
