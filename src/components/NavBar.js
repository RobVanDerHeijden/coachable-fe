import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import CoachableLogo from "../assets/imgs/logo-controller.png";

function NavBar() {
  const navigate = useNavigate();

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/coaches",
      text: "Coaches",
    },
  ];

  let userName = "";
  if (
    localStorage.getItem("claims") !== undefined &&
    localStorage.getItem("claims") !== null
  ) {
    userName = JSON.parse(localStorage.getItem("claims")).sub;
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#a3ffa3",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Navbar.Brand href="/" className="py-0">
            <img
              src={CoachableLogo}
              width="75"
              className="d-inline-block align-top"
              alt="Coachable logo"
            />
          </Navbar.Brand>

          {links.map((link) => (
            <Link key={link.id} to={link.path} style={linkStyle}>
              <Typography
                key={link.id}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                href={link.path}
              >
                {link.text}
              </Typography>
            </Link>
          ))}

          <Typography sx={{ flexGrow: 1 }}></Typography>

          <Typography style={{ marginRight: "20px" }}>
            {userName !== "" ? (
              <>
                Welcome <b>{userName}</b>
              </>
            ) : (
              <>Please log in</>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
