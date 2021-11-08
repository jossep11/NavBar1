import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// import { Link as scroll, scrollSpy, scroller } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcons,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavButtonLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavIcons />
            PLACES
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem className="contenedor-link">
              <NavLinks
                to="/"
                onClick={() => window.location.replace("/#home1")}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/"
                onClick={() => window.location.replace("/#serv1")}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Products</NavLinks>
            </NavItem>
            <NavItem>
              <Link to="serv1" smooth="true" duration={1000} styles="border:0">
                <NavButtonLink to="/">Contact</NavButtonLink>
              </Link>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
