import React from 'react';
import './Footer.css';
import { Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupsIcon from '@mui/icons-material/Groups';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Grid className='footer'>
      <Link className="footer__label">Contact Us</Link>
      <div className='footer__links'>
        <Link className="footer__links__icons"><InstagramIcon style={{ fontSize: "16px" }} /></Link>
        <Link className="footer__links__icons"><FacebookIcon style={{ fontSize: "16px" }} /></Link>
        <Link className="footer__links__icons"><GroupsIcon style={{ fontSize: "16px" }} /></Link>
        <Link className="footer__links__icons"><LinkedInIcon style={{ fontSize: "16px" }} /></Link>
      </div>
    </Grid>
  );
}

export default Footer;
