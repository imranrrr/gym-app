import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useAuthenticate from '../../hooks/useAuthenticate';
import { Redirect } from "react-router-dom";

const SignIn = () => {

  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthenticate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (user.email && user.password) {
      const { userObject } = await login(user);
      console.log(userObject)
      setRedirect(true)
    }
  }

  // useEffect(() => {
  //   return <redirect to="/" />
  // }
  //   , [redirect, setRedirect])


  return (
    <Grid>
      <div className='signIn'>
        <div className='signIn__imageContainer'>
          <img src={require("../../assets/gym-login-2.jpg")} alt="" className='signIn__imageContainer__image' />
        </div>
        <form onSubmit={handleSubmit} className='signIn__formContainer'>
          <h1>Sign In</h1>
          <div className='signIn__formContainer__input'>
            <TextField id="outlined-basic1" label="Email" variant="outlined" name="email" type="email" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <EmailIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signIn__formContainer__input'>
            <TextField id="outlined-basic2" label="Password" variant="outlined" name="password" type="password" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <VisibilityIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div>
            <Button variant='contained' className='signIn__formContainer__button' type='submit'>Sign In</Button>
          </div>
          <Link to="/signup" className='signIn__formContainer__link'>Sign Up</Link>
        </form>
      </div>
    </Grid>
  );
}

export default SignIn;
