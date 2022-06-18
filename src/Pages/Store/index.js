import React from 'react';
import Page from '../../Components/Page/Page';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Button } from '@mui/material';

const Store = () => {
  return (
    <Page>
      <Grid style={{marginTop:"4rem"}}>
        <div className='container'>
          <h2>Our Store</h2>
          <Link to="/cart" className='container__cart' ><span>0</span><ShoppingCartOutlinedIcon style={{ fontSize: "25px" }} /></Link>
        </div>
        <div className='store'>
          <div className='store__products'>
            <img src={require("../../assets/gym-shirts-1.webp")} alt="" className='store__products__image' />
            <div className='store__products__details'>
              <p className='store__products__details__specs'>Black Performance Tee With Grey Mesh Shoulder Panel</p>
              <div className='store__products__details__size'>
                <p>Size:</p>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className='store__products__details__price'>
                <p>Price:</p>
                <span>31 $</span>
              </div>
              <Button variant="contained" className='store__products__details__addToCart'>Add to Cart</Button>
            </div>
          </div>
          <div className='store__products'>
            <img src={require("../../assets/gym-shirts-2.webp")} alt="" className='store__products__image' />
            <div className='store__products__details'>
              <p className='store__products__details__specs'>Black Performance Tee With Grey Mesh Shoulder Panel</p>
              <div className='store__products__details__size'>
                <p>Size:</p>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className='store__products__details__price'>
                <p>Price:</p>
                <span>31 $</span>
              </div>
              <Button variant="contained" className='store__products__details__addToCart'>Add to Cart</Button>
            </div>
          </div>
          <div className='store__products'>
            <img src={require("../../assets/gym-shirts-3.webp")} alt="" className='store__products__image' />
            <div className='store__products__details'>
              <p className='store__products__details__specs'>Black Performance Tee With Grey Mesh Shoulder Panel</p>
              <div className='store__products__details__size'>
                <p>Size:</p>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className='store__products__details__price'>
                <p>Price:</p>
                <span>31 $</span>
              </div>
              <Button variant="contained" className='store__products__details__addToCart'>Add to Cart</Button>
            </div>
          </div>
          <div className='store__products'>
            <img src={require("../../assets/gym-shirts-4.webp")} alt="" className='store__products__image' />
            <div className='store__products__details'>
              <p className='store__products__details__specs'>Black Performance Tee With Grey Mesh Shoulder Panel</p>
              <div className='store__products__details__size'>
                <p>Size:</p>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className='store__products__details__price'>
                <p>Price:</p>
                <span>31 $</span>
              </div>
              <Button variant="contained" className='store__products__details__addToCart'>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Grid>
    </Page>
  );
}

export default Store;
