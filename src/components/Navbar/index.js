import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1 className="text-white">Fakemazon</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink className="text-white" to="/cart" activeStyle>
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
