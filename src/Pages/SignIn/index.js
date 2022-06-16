import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignIn = () => {
  return (
    <Grid>
      <div className='signIn'>
        <div className='signIn__imageContainer'>
          <img src={require("../../assets/gym-login-2.jpg")} alt="" className='signIn__imageContainer__image' />
        </div>
        <div className='signIn__formContainer'>
          <h1>Sign In</h1>
          <div className='signIn__formContainer__input'>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" sx={{ width: "300px" }} />
            <EmailIcon sx={{ position: "absolute", marginLeft:"-35px", marginTop:"15px" }} />
          </div>
          <div className='signIn__formContainer__input'>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{ width: "300px" }} />
            <VisibilityIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <Link to="/"><Button variant='contained' className='signIn__formContainer__button'>Sign In</Button></Link>
          <Link to="/signup" className='signIn__formContainer__link'>Sign Up</Link>
        </div>
      </div>

    </Grid>
  );
}

export default SignIn;
