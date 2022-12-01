import styled from "styled-components";
import { Container } from "./Container";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export const Header = () => {
  return (
    <Navbar>
      <Container>
        <Flex>
          <Logo>Get Merried</Logo>
          <NavLinks>
            <li>features</li>
            <li>design</li>
            <li>works</li>
            <li>paket</li>
          </NavLinks>
          <Login>Login</Login>
        </Flex>
        <BtnNav>
          <MdOutlineKeyboardArrowDown />
        </BtnNav>
      </Container>
    </Navbar>
  );
};

const BtnNav = styled.button`
  color: inherit;
  padding: 2px;
  position: fixed;
  bottom: 0;
  transform: translateX(50%);
  background-color: inherit;
  font-size: 1.6rem;
  align-items: center;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled.button`
  font-size: 0.9rem;
  padding: 0.6em 1.3em;
  border: 1px solid;
  border-radius: 7px;
  background-color: transparent;
  font-weight: 500;

  &:hover {
    background-color: #10a19d;
    border: 1px #b5f4ed;
    color: #b5f4ed;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  cursor: pointer;

  > li {
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    margin: auto;
    &:hover {
      border-bottom: 2px solid #10a19d;
      font-weight: 500;
    }
  }

  @media (max-width: 540px) {
    height: 60vh;
    width: 100vw;
    background-color: #d9f4f1;
    position: absolute;
    font-size: 1.6rem;
    top: 0;
    backdrop-filter: blur(5px);
    opacity: 0.9;
    transform: translateX(-22px);
    transform: translateY(${(props) => props.nav});
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const Navbar = styled.nav`
  background-color: #b5f4ed;
  backdrop-filter: blur(5px);
  color: #10a19d;
  text-transform: capitalize;
  height: 5rem;
  width: 100vw;
  max-width: 1300px;
  position: fixed;
  z-index: 50;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  line-height: 6px;
  text-decoration: underline;
  font-weight: 500;
  font-family: "Satisfy", cursive;
  cursor: pointer;
`;
