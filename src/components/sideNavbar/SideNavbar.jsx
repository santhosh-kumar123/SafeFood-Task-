import React from "react";
import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";
import { FaHome } from "react-icons/fa";
const SideNavBar = () => {
  return (
    <section className={Styles.sidebarSection}>
      <h2
        style={{
          color: "rgb(28,108,89)",
          textAlign: "center",
          marginTop: "18px",
        }}
      >
        Dashboard
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "120px",
        }}
        className={Styles.sidediv1}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "120px",
          }}
        >
          <li >
            <Link style={{ color: "green" }} to="/">
              <FaHome />
              LogOut
            </Link>

            <li>
              {" "}
              <Link to="/CreateEmployee"> NEW Emloyee</Link>
            </li>
            <li>
              <Link to="/DeleteEmloyee">Emloyee Details</Link>
            </li>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideNavBar;
