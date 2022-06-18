import React, { useState, useEffect } from "react";
import useAuthenticate from '../../hooks/useAuthenticate'
import { Redirect } from "react-router-dom";
import { Button, Grid, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';


const SignUp = () => {

  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { register } = useAuthenticate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (user.password.length < 5)
      return alert("Password must be atleast 5 characters long!");

    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password
    ) {
      const { userObject } = await register(user);
      if (!userObject) alert("Something Wrong");

      if (Object) {
        localStorage.set({ firstName: userObject.firstName, lastName: userObject.lastName, email: userObject.email, password: userObject.password })
      }
      setRedirect(true)
    }
  }


  // useEffect(() => {
  //   return <Redirect to="/" />
  // }
  //   , [redirect, setRedirect])

  return (
    <Grid>
      <div className='signUp'>
        <div className='signUp__imageContainer'>
          <img src={require("../../assets/gym-login-2.jpg")} alt="" className='signUp__imageContainer__image' />
        </div>
        <form onSubmit={handleSubmit} className='signUp__formContainer'>
          <h1>Sign Up</h1>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic1" label="First Name" name="firstName" variant="outlined" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <PersonIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic2" label="Last Name" name="lastName" variant="outlined" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <PersonIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic3" label="Email" name="email" variant="outlined" type="email" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <EmailIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div className='signUp__formContainer__input'>
            <TextField id="outlined-basic4" label="Password" name="password" variant="outlined" type="password" sx={{ width: "300px" }} onChange={(e) => handleChange(e)} />
            <VisibilityIcon sx={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }} />
          </div>
          <div>
            <Button variant='contained' className='signUp__formContainer__button' type="submit">Sign Up</Button>
          </div>
          <Link to="/signin" className='signUp__formContainer__link'>Sign In</Link>
        </form>
      </div>
    </Grid>
  );
}

export default SignUp;
