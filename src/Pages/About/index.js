import React from 'react';
import Page from '../../Components/Page/Page';
import { Grid, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import MyMap from '../About/components/GoogleMap';


const About = () => {
  return (
    <Page>
      <Grid className="about">
        <img src={require("../../assets/gym-about-1.jpg")} alt="" />
        <div className='about__details'>
          <div className='about__details__aboutUs'>
            <h2>About Us</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <div>
            <h2>Location</h2>
            <div className='about__details__location'>
              <div>
                <div className='about__details__location__address'>
                  <HomeIcon />
                  <span>14390 Air & Space</span>
                </div>
                <div className='about__details__location__address__detail'>
                  <span>Museaum Pkwy</span>
                  <span>Chantilly, VA 20151</span>
                  <span>United States</span>
                  <Link>Get Directions</Link>
                </div>
              </div>
              <div className='about__details__location__map'>
                <MyMap />
              </div>
            </div>
          </div>
          <div className='about__details__contactUs'>
            <h2>Contact Us</h2>
            <div className='about__details__contactUs__phone'>
              <PhoneIcon />
              <span>+91-1234567</span>
            </div>
            <div className='about__details__contactUs__email'>
              <MailIcon />
              <span>@abcd123@email.com</span>
            </div>
          </div>
        </div>
      </Grid>
    </Page>
  );
}

export default About;
