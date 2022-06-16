import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';


const SignUp = () => {
  return (
    <Grid>
      <div className='signUp'>
        <div className='signUp__imageContainer'>
          <img src={require("../../assets/gym-login-2.jpg")} alt="" className='signUp__imageContainer__image' />
        </div>
        <div className='signUp__formContainer'>
          <h1>Sign Up</h1>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{ width: "300px" }} />
            <PersonIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{ width: "300px" }} />
            <PersonIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" sx={{ width: "300px" }} />
            <EmailIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{ width: "300px" }} />
            <VisibilityIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <Link to="/"><Button variant='contained' className='signUp__formContainer__button'>Sign Up</Button></Link>
          <Link to="/signin" className='signUp__formContainer__link'>Sign In</Link>
        </div>
      </div>
    </Grid>
  );
}

export default SignUp;
