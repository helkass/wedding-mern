import styled from "styled-components";
import { Container } from "../Container";
import { Button } from "../Button.style";
import example from "../../assets/example.jpg";

export const About = () => {
  return (
    <Container>
      <Main>
        <h1>Wedding Invitation Website</h1>
        <p>
          Share your wedding happiness by using the exclusive wedding invitation
          website from Ze Invitation. <span>Easy, fast & effective</span>.
        </p>
        <Button>Get Now</Button>
        <Image src={example} alt="example" />
      </Main>
    </Container>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  line-height: 2rem;
  gap: 3em;
  justify-content: center;
  margin: 40px auto;
  letter-spacing: 0.9px;

  > h1 {
    font-size: 2rem;
    color: #10a19d;
  }

  > p {
    color: #10a19d;
    opacity: 0.8;
    font-size: 1.4rem;

    > span {
      font-weight: 500;
    }
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 80%;
  height: 400px;
`;
