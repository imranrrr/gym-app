import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { Grid } from '@mui/material';
import Carousel from './components/Carousel';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Grid className="home">
        <Carousel />
        <div className='home__images'>
          <h2>Features</h2>
          <div className='home__images__containerFirst'>
            <img src={require("../../assets/gym-home-2.jpg")} alt="" className="home__images__containerFirst__leftImage" />
            <img src={require("../../assets/gym-home-3.jpg")} alt="" className="home__images__containerFirst__rightImage" />
          </div>
          <div className='home__images__containerFirst'>
            <img src={require("../../assets/gym-home-9.jpg")} alt="" className="home__images__containerFirst__leftImage" />
            <img src={require("../../assets/gym-home-10.jpg")} alt="" className="home__images__containerFirst__rightImage" />
          </div>
        </div>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
