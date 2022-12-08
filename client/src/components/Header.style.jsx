import styled from "styled-components";
import { Container } from "./Container";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import {IoMdArrowDropright, IoMdArrowDropdown} from "react-icons/io"
import {AiOutlineClose} from "react-icons/ai"
import {FaBars} from "react-icons/fa"

export const Header = ( {features, options, works} ) => {
  const [show, setShow] = useState(false)
  const [nav, setNav] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  useEffect(() => {
    if(window.screen > "550px"){
      setNav(true)
    }else {
      return setNav(false)
    }
  },[])

  const handleNav = (e) => {
    e.preventDefault();
    setNav(!nav)
  }

  const scrollToSection = (refElement) => {
    window.scrollTo({
      top: refElement.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <Navbar>
      <Container>
        <Flex>
          <Bars  onClick={handleNav} fs="1.2rem">
            <FaBars/>
          </Bars>
          <Logo>Get Merried</Logo>
          <NavLinks x={nav ? "0" : "100%"}>
            <li>
              <span onClick={() => scrollToSection(features)}>features</span>
            </li>
            <li>
              <span onClick={() => scrollToSection(options)}>design</span>
            </li>
            <li>
              <span onClick={() => scrollToSection(works)}>works</span>
            </li>
            <li>
              <span>packets</span>
            </li>
            <li>
                <span onClick={handleClick}>catalogs {show ? <IoMdArrowDropdown size={20}/> : <IoMdArrowDropright size={20}/>}</span>
                {show ?
                <Dropdowns>
                  <DropItem>
                    <Link to='/catalogs'>Silver</Link>
                    </DropItem>
                  <DropItem>Gold</DropItem>
                  <DropItem>Diamond</DropItem>
                </Dropdowns>
                : <></>}
            </li>
            <Bars onClick={handleNav} fs="2rem">
              <AiOutlineClose/>
            </Bars>
          </NavLinks>
          <Login>Login</Login>
        </Flex>
      </Container>
    </Navbar>
  );
};

const Bars = styled.button`
  background-color: inherit;
  font-size: ${props => props.fs};
  display: none;

  @media (max-width: 548px){
    display: flex;
  }

  &:focus {
    outline: none;
  }
`

const Dropdowns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap:2px;
  background-color: #b5f4ed;
  position: absolute;
  border-radius: 10px;
  width: 120px;
  bottom: -90%;
  transform: translate(40px);
`
const DropItem = styled.span`
  padding: 5px 10px;
  background-color: #b5f4ed;
  border-radius: 5px;
  &:hover {
    background-color: #10a19d;
    color: white;
  }
`

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
  -webkit-transition: all 0.6s ease-out;
        -moz-transition: all 0.6s ease-out;
        -o-transition: all 0.6s ease-out;
        -ms-transition: all 0.6s ease-out;
        transition: all 0.6s ease-out;

  > li {
    display: flex;
    padding-bottom: 2px;
    margin: auto;
    border-bottom: 2px solid #b5f4ed;

    &:hover {
      border-bottom: 2px solid #10a19d;
    }

    span {
      align-items: center;
      display: flex;
    }
  }

  @media (max-width: 548px) {
    flex-direction: column;
    height: calc(100vh - 40px);
    padding-bottom: 20px;
    display: inline-flex;
    width: 100%;
    background-color: #d9f4f1;
    position: absolute;
    font-size: 1.6rem;
    top: 0;
    margin: 0;
    /* left: -100%; */
    transform: translateX(${props => props.x});
    backdrop-filter: blur(5px);
    opacity: 0.9;
    transition: all 0.7s ease-out;
  }
`;

const Navbar = styled.nav`
  background-color: #b5f4ed;
  backdrop-filter: blur(5px);
  color: #10a19d;
  text-transform: capitalize;
  height: 5rem;
  width: 100vw;
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
