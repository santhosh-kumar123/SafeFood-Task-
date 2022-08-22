import {
  Button,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Styles from "./SignIn.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  let navigate = useNavigate();
  let [values, setValues] = useState({
    id: 0,
    email: "",
    password: "",
  });
  let handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  let handleSubmit = e => {
    let { email, password } = values;
    if (email === "" || email === null) {
      alert("Enter the Valid Email");
    } else if (!email.includes("@")) {
      alert("Email is invalid email includes @");
    } else if (password === "" || password === null) {
      alert("Enter the Valid Password");
    } else if (values.password.length < 5) {
      alert("Password is Invalid length <6");
    } else {
      axios
        .post("http://localhost:5001/", values)
        .then(response => {
          if (response.data.user) {
            navigate("/");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    e.preventDefault();
    setValues("");
    console.log(values);
    alert("Before Sign In SignUp ones")
    {props.hancleClick()}
  };
  return (
    <Modal open>
      <div className={Styles.signUpdiv1}>
        <form action="" className={Styles.signUpform} onSubmit={handleSubmit}>
          <FormControl>
            <Grid container item>
              <Grid item>
                <h1>Sign In</h1>

                <TextField
                  label="Email Address"
                  type="email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  style={{ marginTop: "35px", width: "95%" }}
                  required
                  fullWidth
                />
                <TextField
                  className="loginTextField"
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  style={{ marginTop: "20px", width: "95%" }}
                  required
                  fullWidth
                />

                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    padding: "10px",
                    backgroundColor: "rgb(112,100,231)",
                    color: "white",
                    width: "95%",
                  }}
                >
                  Sign In Now
                </Button>

                <Typography style={{ marginTop: "20px" }}>
                  Don't have an account?
                  <Link
                    style={{
                      color: "rgb(112,100,231)",
                      textDecoration: "none",
                    }}
                    to="/signUp"
                  >
                    {" "}
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
    </Modal>
  );
};

export default SignIn;











