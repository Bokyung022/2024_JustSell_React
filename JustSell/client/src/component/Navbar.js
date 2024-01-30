// https://www.youtube.com/watch?v=1yMrdBsep-A - PedroTech: Responsive Navbar In React With Styled Components Tutorial

import React, { useState } from "react";
import LogoImg from "../images/logo.png";
import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "../styles/Navbar.style";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home Page</NavbarLink>
            <NavbarLink to="/search">Search</NavbarLink>
            <NavbarLink to="/listings">Listings</NavbarLink>
            <NavbarLink to="/createProperty">Create Property</NavbarLink>
            <NavbarLink to="/admin">Admin</NavbarLink>
            <NavbarLink to="/login">Login</NavbarLink>
            <NavbarLink to="/registration">Registration</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home Page</NavbarLinkExtended>
          <NavbarLinkExtended to="/search">Search</NavbarLinkExtended>
          <NavbarLinkExtended to="/listings">Listings</NavbarLinkExtended>
          <NavbarLinkExtended to="/createProperty">
            Create Property
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/login">Login</NavbarLinkExtended>
          <NavbarLinkExtended to="/registration">
            Registration
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
