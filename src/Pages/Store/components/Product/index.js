import React from 'react';
import { Grid, Button } from '@mui/material';


const Product = () => {
  return (
    <Grid className='product'>
      <div className='product__description'>
        <div className='product__description__details'>
          <img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='product__description__details__image' />
          <p>Black Performance Tee With Grey Mesh Shoulder Panel</p>
        </div>
        <p className='product__description__quantity'>Qty:<span>1</span></p>
        <p className='product__description__price'>Price: <span>31 $</span></p>
        <Button className='product__description__removeButton' variant='contained'>Remove</Button>
      </div>
      <div className='product__description'>
        <div className='product__description__details'>
          <img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='product__description__details__image' />
          <p>Black Performance Tee With Grey Mesh Shoulder Panel</p>
        </div>
        <p className='product__description__quantity'>Qty:<span>1</span></p>
        <p className='product__description__price'>Price: <span>31 $</span></p>
        <Button className='product__description__removeButton' variant='contained'>Remove</Button>
      </div>
      <div className='product__description'>
        <div className='product__description__details'>
          <img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='product__description__details__image' />
          <p>Black Performance Tee With Grey Mesh Shoulder Panel</p>
        </div>
        <p className='product__description__quantity'>Qty:<span>1</span></p>
        <p className='product__description__price'>Price: <span>31 $</span></p>
        <Button className='product__description__removeButton' variant='contained'>Remove</Button>
      </div>
      <div className='product__description'>
        <div className='product__description__details'>
          <img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='product__description__details__image' />
          <p>Black Performance Tee With Grey Mesh Shoulder Panel</p>
        </div>
        <p className='product__description__quantity'>Qty:<span>1</span></p>
        <p className='product__description__price'>Price: <span>31 $</span></p>
        <Button className='product__description__removeButton' variant='contained'>Remove</Button>
      </div>
      <div className='product__description'>
        <div className='product__description__details'>
          <img src={require("../../../../assets/gym-shirts-1.webp")} alt="" className='product__description__details__image' />
          <p>Black Performance Tee With Grey Mesh Shoulder Panel</p>
        </div>
        <p className='product__description__quantity'>Qty:<span>1</span></p>
        <p className='product__description__price'>Price: <span>31 $</span></p>
        <Button className='product__description__removeButton' variant='contained'>Remove</Button>
      </div>
    </Grid>
  );
}

export default Product;
