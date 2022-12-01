import styled from "styled-components";
import { Container } from "../Container";
import backgroundImage from "../../assets/wedding-ceremony.jpg";
import phone from "../../assets/phone.png";
import { Button } from "../Button.style";
export const Hero = () => {
  return (
    <Backgound>
      <Container>
        <Left>
          <img src={phone} />
        </Left>
        <Right>
          <h1>Share your happiness momment</h1>
          <Button>Get Now</Button>
        </Right>
      </Container>
    </Backgound>
  );
};

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
    opacity: 0.3;
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
  }
`;
