import styled from "styled-components";
import { Link } from "react-router-dom";

import { Cart, Image } from "components";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Image src="logo" alt="Logo" />
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
      </Nav>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 69px 162px;
  background: rgba(255, 255, 255, 0.9);
`;

const StyledLink = styled(Link)`
  margin-right: 3rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #274c5b;
  text-decoration: none;

  :last-of-type {
    margin-right: 0;
  }
`;

const Nav = styled.div`
  margin-left: auto;
`;

const CartWrapper = styled.div`
  margin-left: 524px;
`;
