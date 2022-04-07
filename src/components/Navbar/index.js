import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1>Fakemazon</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/cart">
                Cart
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
