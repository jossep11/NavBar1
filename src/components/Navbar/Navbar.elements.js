import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 10vh;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  background-color: #24252a;
  position: fixed;
  z-index: 1;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const NavbarContainer = styled.div`
  height: 10vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media screen and (max-width: 960px) {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavIcons = styled(BiWorld)`
  color: white;
  margin-right: 0.4rem;
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    left: 0;
    top: ${({ click }) => (click ? "100%" : "-100vh")};
    opacity: 1;
    transition: all 0.5s ease;
    z-index: -1;
    background-color: #24252a;
  }
`;

export const NavItem = styled.div`
  height: 7vh;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover:not(:last-child) {
    border-bottom: solid 2px #4b59f7;
  }
  @media screen and (max-width: 960px) {
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const NavLinks = styled(Link)`
  color: #e3e3e3;
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    &:hover {
      color: #4b59f7;
    }
  }
`;

export const NavButtonLink = styled(Link)`
  color: #e3e3e3;
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  height: 40%;
  justify-content: center;
  background-color: #0087a7;
  padding: 1rem;
  border-radius: 40px;
`;
