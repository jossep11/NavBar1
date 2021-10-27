import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
              <NavLinks className="link">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks>Products</NavLinks>
            </NavItem>

            <NavItem>
              <NavButtonLink>Contact</NavButtonLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
