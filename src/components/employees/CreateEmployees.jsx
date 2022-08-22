
import React from "react";
import Styles from "../form/SignIn.module.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Apis/Axios";
const CreateEmployees = () => {
  let navigate = useNavigate();
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let fetchUser = async e => {
    e.preventDefault();
    try {
      let payload = { firstname, lastname, email, password };
      await Axios.post("employees", payload);
    } catch (error) {
      console.log(error);
    }
    navigate("/DeleteEmloyee");
  };
  return (
    <Modal open>
      <div className={Styles.signUpdiv1}>
        <form action="" onSubmit={fetchUser} className={Styles.signUpform1}>
          <h1>Create a new account</h1>
          <p style={{ fontSize: "14px", color: "gray" }}>
            use your email to create a new account
          </p>
          <Grid container>
            <Grid item>
              <TextField
                variant="outlined"
                label="First Name"
                type="text"
                fullWidth
                required
                name="firstname"
                value={firstname}
                onChange={e => {
                  setFirstName(e.target.value);
                }}
                style={{ marginTop: "35px", width: "95%" }}
              />

              <TextField
                variant="outlined"
                label="Last Name"
                fullWidth
                required
                type="text"
                name="lastname"
                value={lastname}
                onChange={e => {
                  setLastName(e.target.value);
                }}
                style={{ marginTop: "20px", width: "95%" }}
              />

              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                name="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                style={{ marginTop: "20px", width: "95%" }}
              />

              <TextField
                variant="outlined"
                label="Password"
                type="text"
                fullWidth
                required
                name="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                style={{ marginTop: "20px", width: "95%" }}
              />
            </Grid>
            <Grid item>
              <Typography style={{ marginTop: "20px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isParmanent"
                      label="I have read the"
                      required
                    />
                  }
                />
                I have read the
                <a style={{ color: "rgb(112,100,231)" }} href="">
                  {" "}
                  Terms and Condition
                </a>{" "}
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            style={{
              fontSize: "18px",
              padding: "10px",
              backgroundColor: "rgb(80,72,229)",
              marginTop: "20px",
              margin: "20px 0px",
              borderRadius: "5px",
              border: "none",
              width: "95%",
              color: "white",
            }}
          >
            Sign Up Now
          </Button>
          <Typography>
            Have an account?<Link to="/signIn"> Sign In</Link>
          </Typography>
        </form>
      </div>
    </Modal>
  );
};

export default CreateEmployees;
