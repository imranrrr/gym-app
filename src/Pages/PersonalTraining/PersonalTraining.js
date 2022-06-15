import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Pages/PersonalTraining/PersonalTraining.css";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
function PersonalTraining() {
  return (
    <>
      <Navbar />
      <div className="personl-training">
        <img src={require("../../Assets/personaltraining1.png")} alt="" />
        <div className="registration-form">
          <div className="input-fields">
            <form>
              <EmailIcon className="pt-Icon" fontSize="medium" />
              <TextField id="pt-Textfield" label="Email" variant="outlined" />
              <PersonIcon className="pt-Icon" fontSize="medium" />
              <TextField id="pt-Textfield" label="First" variant="outlined" />
              <PersonIcon className="pt-Icon" fontSize="medium" />
              <TextField id="pt-Textfield" label="Last" variant="outlined" />
              <PhoneIphoneIcon className="pt-Icon" fontSize="medium" />
              <TextField id="pt-Textfield" label="Mobile" variant="outlined" />
            </form>
          </div>
          <div className="pt-description">
            <img src={require("../../Assets/personaltraining2.png")} alt="" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalTraining;
