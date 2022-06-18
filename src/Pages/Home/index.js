import React from 'react';
import { Grid } from '@mui/material';
import Carousel from './components/Carousel';
import Page from "../../Components/Page";

function Home() {
  return (
    <Page>
      <Grid className="home">
        <Carousel />
        <div className='home__images'>
          <h2>Features</h2>
          <div className='home__images__container'>
            <img src={require("../../assets/gym-home-2.jpg")} alt="" className="home__images__container__leftImage" />
            <img src={require("../../assets/gym-home-3.jpg")} alt="" className="home__images__container__rightImage" />
          </div>
          <div className='home__images__container'>
            <img src={require("../../assets/gym-home-9.jpg")} alt="" className="home__images__container__leftImage" />
            <img src={require("../../assets/gym-home-10.jpg")} alt="" className="home__images__container__rightImage" />
          </div>
        </div>
      </Grid>
    </Page>
  );
}

export default Home;
