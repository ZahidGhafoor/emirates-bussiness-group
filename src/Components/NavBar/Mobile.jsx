import React from "react";
import "./Mobile.scss";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import logo from "../../Assets/Jazman.png";

import MenuIcon from "@mui/icons-material/Menu";
          
import CloseIcon from "@mui/icons-material/Close";

const Mobile = (props) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="mobile__container">
        <NavLink className="links" to="/">
          <CloseIcon className="close" />
          Home &gt;
        </NavLink>
        <NavLink className="links" to="/about">
          About Us &gt;
        </NavLink>
        <NavLink className="links" to="/">
          Our Businesses &gt;
        </NavLink>
        <NavLink className="links" to="/">
          Media &gt;
        </NavLink>
        <NavLink className="links" to="/">
          Careers &gt;
        </NavLink>
        <NavLink className="links" to="/">
          Contact &gt;
        </NavLink>
      </div>
    </Box>
  );
  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className="burger">
              <img src={logo} alt="" className="logo" />
              <div>
                <MenuIcon
                  onClick={toggleDrawer(anchor, true)}
                  className="iconss"
                />
              </div>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Mobile;
