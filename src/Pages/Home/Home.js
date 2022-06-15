import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css';
import { Grid } from '@mui/material';
import Carousel from './components/Carousel';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Grid className="home">
        <Carousel />
        <div className='home__images'>
          <h2>Features</h2>
          <div className='home__images-R1'>
            <img src={require("../../Assets/gym-home-2.jpg")} alt="" className="home__images-R1__image-1" />
            <img src={require("../../Assets/gym-home-3.jpg")} alt="" className="home__images-R1__image-2" />
          </div>
          <div className='home__images-R2'>
            <img src={require("../../Assets/gym-home-9.jpg")} alt="" className="home__images-R2__image-1" />
            <img src={require("../../Assets/gym-home-10.jpg")} alt="" className="home__images-R2__image-2" />
          </div>
        </div>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
