// https://www.youtube.com/watch?v=1yMrdBsep-A - PedroTech: Responsive Navbar In React With Styled Components Tutorial
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  RightContainer
} from "../styles/Navbar.style";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  
  const [authState, setAuthState] = useState({
    username: "",
    userID: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            userID: response.data.userID,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "",
      userID: 0,
      status: false,
    });
  };

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
            {!authState.status && (
              <>
                <NavbarLink to="/login"> Login</NavbarLink>
                <NavbarLink to="/registration"> Registration</NavbarLink>
              </>
            )}
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

        <loggedInContainer>
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
        </loggedInContainer>

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
          <NavbarLinkExtended to="/admin">Admin</NavbarLinkExtended>
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
