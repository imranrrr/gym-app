import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function Slider(props) {
  return (
    <Carousel className='slider' >
      {<img src={require("../../../assets/gym-home-1.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-2.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-3.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-4.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-5.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-6.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-7.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-8.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-9.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-10.jpg")} alt="" className="slider__images" />}
      {<img src={require("../../../assets/gym-home-11.jpg")} alt="" className="slider__images" />}
    </Carousel>
  )
}
// eslint-disable-next-line
function Item(props) {
  return (
    <Paper>
      <h2>{props.item.image}</h2>
    </Paper>
  )
}

export default Slider;