import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Axios } from "../../Apis/Axios";
import Styles from "../form/SignIn.module.css";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
const EditEmployees = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let fetchUsers = async () => {
    let { data } = await Axios.get(`employees/${id}`);
    let { firstname,lastname,email,password } = data;
    setFirstName(firstname);
    setLastName(lastname);
    setEmail(email)
    setPassword(password)
  };
  let UpdateUser = async e => {
    e.preventDefault();
    try {
      let payload = { firstname,lastname,email,password };
      await Axios.put(`employees/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
    navigate("/DeleteEmloyee");
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Modal open>
      <div className={Styles.signUpdiv1}>
        <form action="" onSubmit={UpdateUser} className={Styles.signUpform2}>
          <h1> Update the account</h1>
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
            Update The Employees
          </Button>
         
        </form>
      </div>
    </Modal>
  );
}

export default EditEmployees


