import React, { useState } from "react";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  let [state, setState] = useState(false)
  let handleClick = () => {
    setState(true)
  }
  return (
    <section className="navbarsection">
      <div className="navbardiv">
        <ul>
          <li>
            {state && (
              <Link to="/sidenavbar" style={{ marginLeft: "0px" }}>
                <AiOutlineMenu style={{ fontSize: "22px" }} />
              </Link>
            )}
          </li>
          <li>
            <Link to="/signIn" onClick={handleClick}>
              signIn
              <AssignmentIndIcon
                style={{
                  fontSize: "27px",
                  color: "blue",
                  Top: "-10px",
                  Left: "-40px",
                  position: "absolute",
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
