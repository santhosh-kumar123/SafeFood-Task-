const details = {
  id: 0,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isParmanent: false,
};
import React, { useState } from "react";
import Styles from "./SignIn.module.css";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  let [values, setValues] = useState(details);
  let navigate = useNavigate();
  let handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  let handleSubmit = e => {
    const { firstname, lastname, email, password } = values;
    if (firstname === "" || firstname === null) {
      alert("Enter the Valid First Name");
    } else if (lastname === "" || lastname === null) {
      alert("Enter the Valid Last Name");
    } else if (email === "" || email === null) {
      alert("Enter the Valid Email");
    } else if (!email.includes("@")) {
      alert("Email is invalid email includes @");
    } else if (password === "" || password === null) {
      alert("Enter the Valid Password");
    } else if (values.password.length < 6) {
      alert("Password is Invalid length <5");
    } else {
      axios
        .post("http://localhost:5001/signup", values)
        .then(response => {
          if (response.data.user) {
            alert(response.data.message);
            e.preventDefault();
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    e.preventDefault();
    setValues("");
    console.log(values);
    navigate("/sidenavbar");
  };
  return (
    <Modal open>
      <div className={Styles.signUpdiv1}>
        <form
          action="/"
          onSubmit={handleSubmit}
          className={Styles.signUpform1}
        
        >
          <Grid container item>
            <Grid item >
              <h1>Create a new account</h1>
              <p style={{ fontSize: "16px", color: "gray" }}>
                use your email to create a new account
              </p>
              <TextField
                variant="outlined"
                label="First Name"
                type="text"
                fullWidth
                required
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                style={{ marginTop: "35px", width: "95%" }}
              />
              <TextField
                variant="outlined"
                label="Last Name"
                type="text"
                fullWidth
                required
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                style={{ marginTop: "20px", width: "95%" }}
              />
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                name="email"
                value={values.email}
                onChange={handleChange}
                style={{ marginTop: "20px", width: "95%" }}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                required
                name="password"
                value={values.password}
                onChange={handleChange}
                style={{ marginTop: "20px", width: "95%" }}
              />
            </Grid>
            <Grid item>
              <Typography style={{marginTop:"20px"}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isParmanent"
                        label="I have read the"
                        required
                      />
                    }
                  />I have read the
                <a
                  style={{ color: "rgb(112,100,231)", }}
                  href=""
                >
                  {" "}
                  Terms and Condition
                </a>{" "}
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            // onClick={()=>navigate("/")}
            style={{
              fontSize: "16px",
              padding: "10px",
              backgroundColor: "rgb(80,72,229)",
              marginTop: "20px",
              margin: "20px 0px",
              width: "95%",
              color: "white",
            }}
          >
            Sign Up Now
          </Button>
          <Typography>
            Have an account?
            <Link
              style={{ color: "rgb(112,100,231)", textDecoration: "none" }}
              to="/signIn"
            >
              {" "}
              Sign In
            </Link>
          </Typography>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
