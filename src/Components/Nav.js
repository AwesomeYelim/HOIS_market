import React from "react";
import styled from "styled-components";
import "./reset.css";
import logo from "../Images/Logo-hois.svg";
import search from "../Images/Icon/search.svg";
import cart from "../Images/Icon/icon-shopping-cart.svg";
import user from "../Images/Icon/icon-user.svg";

const Nav = () => {
  return (
    <NavBar>
      <Logo />
      <Search>
        <Input />
        <SearchButton />
      </Search>
      <RightIcon>
        <RB>
          <Cart />
          장바구니
        </RB>
        <RB>
          <User />
          마이페이지
        </RB>
      </RightIcon>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  position: relative;
  width: 1040px;
  height: 70px;
  margin: 30px auto;
  padding: 10px;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  margin-right: 20px;
`;

const Search = styled.div`
  position: relative;
  margin-top: 5px;
  width: 400px;
`;

const Input = styled.input.attrs({
  placeholder: "상품을 검색해보세요 !",
})`
  position: absolute;
  z-index: 10;
  border-radius: 50px;
  border: 2px solid #0a52be;
  width: 100%;
  padding: 10px;
`;

const SearchButton = styled.img.attrs({
  src: `${search}`,
})`
  position: absolute;
  z-index: 11;
  right: 10px;
  top: 6px;
  cursor: pointer;
`;

const RightIcon = styled.div`
  position: absolute;
  right: 0;
`;

const RB = styled.button`
  margin-right: 15px;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
`;

const Cart = styled.img.attrs({
  src: `${cart}`,
})`
  margin-bottom: 2px;
`;

const User = styled.img.attrs({
  src: `${user}`,
})`
  margin-bottom: 2px;
`;

export default Nav;
