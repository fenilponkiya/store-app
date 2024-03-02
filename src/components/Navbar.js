import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img
          src={logo}
          alt="store"
          className="navbar-brand"
          style={{ height: "50px", width: "190px", borderRadius: "8px" }}
        />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" style={{ marginLeft: "auto" }}>
        <ButtonContainer>
          <i className="fas fa-cart-plus" />
          My cart
        </ButtonContainer>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
    }
  }
`;
