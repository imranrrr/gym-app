import React, { useRef } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import Page from "../../components/Page";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
function PersonalTraining() {
  const logoRef = useRef();
  const selectLogo = () => logoRef.current.click();

  return (
    <Page>
      <div className="personlTraining">
        <img
          src={require("../../assets/personaltraining1.png")}
          alt=""
          className="personlTraining__bannerImage"
        />
        <div className="personlTraining__registrationForm">
          <div className="personlTraining__registrationForm__formFields">
            <form>
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="personlTraining__registrationForm__formFields__inputField"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="email"
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <EmailIcon
                        className="personlTraining__registrationForm__formFields__icon"
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  label="Email"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="personlTraining__registrationForm__formFields__inputField"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  First Name
                </InputLabel>
                <OutlinedInput
                  id=""
                  type="text"
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <PersonIcon
                        className="personlTraining__registrationForm__formFields__icon"
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  label="First Name"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="personlTraining__registrationForm__formFields__inputField"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id=""
                  type="text"
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <PersonIcon
                        className="personlTraining__registrationForm__formFields__icon"
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  label="Last Name"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="personlTraining__registrationForm__formFields__inputField"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Phone Number
                </InputLabel>
                <OutlinedInput
                  id=""
                  type="text"
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <PhoneIphoneIcon
                        lassName="personlTraining__registrationForm__formFields__icon"
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  label="Phone Number"
                />

                <div className="personlTraining__registrationForm__formButton">
                  <button>SUBMIT</button>
                </div>
              </FormControl>
            </form>
          </div>
          <div
            className="personlTraining__registrationForm__formAvatar"
            onClick={selectLogo}
          >
            <div className="personlTraining__registrationForm__createIcon">
              
            </div>
            <input
              required
              name="logo"
              id="logo"
              type="file"
              style={{ display: "none" }}
              ref={logoRef}
              className="personlTraining__registrationForm__inputFile"
            />
            <DriveFolderUploadIcon sx={{fontSize:"15rem"}} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PersonalTraining;
