import styled from "styled-components";
import { Container } from "../Container";
import backgroundImage from "../../assets/wedding-ceremony.jpg";
import phone from "../../assets/phone.png";
import { Button } from "../Button.style";
export const Hero = () => {
  return (
    <Backgound>
      <Container>
        <Flex>
          <Left>
            <img src={phone} />
          </Left>
          <Right>
            <h1>Share your happiness momment</h1>
            <Button>Get Now</Button>
          </Right>
        </Flex>
      </Container>
    </Backgound>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 548px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`

const Backgound = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 1;
    top: 0;
    background-color: #ddfffb;
    opacity: 0.5;
  }

  @media (max-width: 548px){
    height: 80vh;
    background-position-x: 50%;
    
  }

  @media (max-width: 768px){
    height: 80vh;
    background-position-x: 50%;
    
  }
`;

const Left = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  transform: translateX(-40px);
  width: 50%;
  justify-content: center;

  > img {
    width: 290px;
    height: 450px;
    object-fit: cover;
    position: absolute;
    opacity: 0.8;
    transform: translateY(40px);
  }

  @media (max-width: 548px){
    width: 100%;
    margin: auto;
    display: none;
    transform: translateX(-10px);

    img {
      width: 40%;
      height: 200px;
    }
  }

  @media (max-width: 768px){
    img{
      width: 60%;
      height: auto;
    }
  }
`;

const Right = styled.div`
  padding-left: 10px;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: end;
  text-align: end;
  justify-content: center;
  width: 50%;
  color: #10a19d;

  > h1 {
    font-size: 3rem;
    text-transform: capitalize;
    flex-wrap: wrap;
    position: relative;
  }

  @media (max-width: 768px){
    transform: translateY(20%);
    margin-right: 10px;
    
    h1{
      &:after{
        content: "";
        position: absolute;
        width: 100%;
        border-radius: 50% 0 0 0;
        top:0;
        left: 0;
        opacity: 0.4;
        height: 100%;
        background-color: white;
        z-index: -1;
      }
    }
  }
  @media (max-width: 548px){
    width: 100%;
    align-items: center;
    text-align: center;
    transform: translateY(70%);
    >h1 {
      font-size: 1.8rem;
  }
}
`;
