import React from "react";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import Page from "../../components/Page";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';

function PersonalTraining() {

  return (
    <Page>
        <div className="personlTraining">
            <img src={require("../../assets/personaltraining1.png")} alt="" className="personlTraining__bannerImage"/>
            <div className="personlTraining__registrationForm">
                <div className="personlTraining__registrationForm__formFields">
                    <form>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='email'
                                endAdornment={
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                        <EmailIcon className="personlTraining__registrationForm__formFields__icon" fontSize="medium" />
                                    </IconButton>
                                }
                                label="Email"
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                            <OutlinedInput
                                id=""
                                type='text'
                                endAdornment={
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                        <PersonIcon className="personlTraining__registrationForm__formFields__icon" fontSize="medium" />
                                    </IconButton>
                                }
                                label="First Name"
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                            <OutlinedInput
                                id=""
                                type='text'
                                endAdornment={
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                        <PersonIcon className="personlTraining__registrationForm__formFields__icon" fontSize="medium" />
                                    </IconButton>
                                }
                                label="Last Name"
                            />
                        </FormControl>
                        
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                            <OutlinedInput
                                id=""
                                type='text'
                                endAdornment={
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                        <PhoneIphoneIcon className="personlTraining__registrationForm__formFields__icon" fontSize="medium" />
                                    </IconButton>
                                }
                                label="First Name"
                            />
                        </FormControl>
                    </form>
                </div>

                <div className="personlTraining__registrationForm__formAvatar">
                    <img src={require("../../assets/personaltraining2.png")} alt="" />
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    </Page>
  );
}

export default PersonalTraining;
