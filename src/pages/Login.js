import React from "react";
import styled from "styled-components";
import logo from "../Images/Logo-hois.svg";

const Login = () => {
  return (
    <>
      <Wrap>
        <Logo />
        <div>
          <Customer>구매회원 로그인</Customer>
          <Seller>판매회원 로그인</Seller>
          <Box>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </Box>
        </div>
        <div>
            <Join>회원가입</Join>
            <FindPassword>비밀번호 찾기</FindPassword>
        </div>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & div{
    margin-top: 20px;
  }
`;
const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 170px;
  margin: 100px 50% 20px 50%;
`;

const Customer = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  padding: 10px 50px;
  font-weight: 500;
  color: #333;
`;

const Seller = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
  padding: 10px 50px;
  background-color: #ccc;
  font-weight: 500;
  color: #333;
`;

const Box = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 20px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;

  & input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  & input {
    border: none;
    border-bottom: 1.5px solid #ccc;
    padding-bottom: 10px;
    outline: none;
    background-color: transparent;
    // font-size: 12px;
  }

  & button {
    background-color: #0a52be;
    color: #ffff;
    font-weight: bold;
    padding: 15px;
    border-radius: 5px;
  }
`;

const Join = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  margin-top: 20px;
  cursor: pointer;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 2px solid #333;
`;
const FindPassword = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
`;
export default Login;
