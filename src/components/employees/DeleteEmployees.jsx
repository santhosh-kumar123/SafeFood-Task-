import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Axios } from "../../Apis/Axios";
import Styles from "./delete.module.css"
const DeleteEmployees = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    let fetchUser = async () => {
      let { data } = await Axios.get("/employees");
      setUser(data);
      console.log(data);
    };
    fetchUser();
  }, []);
  let handleEdit = id => {
    window.location.assign(`/EditEmployee/${id}`);
  };
  let handleclick = id => {
    try {
      Axios.delete(`employees/${id}`);
    } catch (error) {
      console.log(error);
    }
    window.location.assign("/DeleteEmloyee");
  };
  return (
    <section className={Styles.deleteSection}>
      <article className={Styles.deleteArticle}>
        <div className={Styles.deleteDiv}>
          <table
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "25px",
              color: "#777",
              flexFlow: "wrap",
            }}
            
            cellPadding="10px"
            cellSpacing="0px"
          >
            {" "}
            <caption>All Employees Details</caption>
            <thead
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: "25px",
                color: "#777",
              }}
            >
              <th>First Name </th>
              <th>Last Name </th>
              <th>Email</th>
              <th>Password</th>
            </thead>
            <tbody>
              {user.map(val => {
                let { id, firstname,lastname,email,password } = val;
                return (
                  <tr
                    style={{
                      textAlign: "center",
                      fontFamily: "sans-serif",
                      fontSize: "25px",
                      color: "#777",
                    }}
                    key={id}
                  >
                    <td>{firstname}</td>
                    <td>
                      {lastname}
                    </td>
                    <td>{email}</td>
                    <td>{password}</td>

                    <td onClick={() => handleEdit(id)}>
                      {" "}
                      <Button variant="primary"
                        style={{
                          margin: "10px",
                          fontFamily: "sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Edit
                      </Button>{" "}
                    </td>
                    <td onClick={() => handleclick(id)}>
                      <Button variant="primary"
                        style={{
                          margin: "10px",
                          fontFamily: "sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default DeleteEmployees;
