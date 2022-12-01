import styled from "styled-components";
import { Container } from "../Container";
import { icons, works } from "../../constants/works.data";
export const Works = () => {
  return (
    <Background>
      <Container>
        <Center>
          <h1>How does it work</h1>
          <p>
            The process of creating a digital invitation website at Ze
            Invitation is very easy & fast.
          </p>
          <iframe
            width="500"
            height="300px"
            src="https://www.youtube.com/embed/4gOcadCW60g"
            title="Tutorial Membuat Website Undangan Digital"
          ></iframe>
          <CardList>
            {works.map((work, i) => {
              const Icon = icons[i];
              return (
                <Card key={i}>
                  <Icons>
                    <Icon />
                  </Icons>
                  <h5>{work.title}</h5>
                  <p>{work.desc}</p>
                </Card>
              );
            })}
          </CardList>
        </Center>
      </Container>
    </Background>
  );
};

const Background = styled.section`
  background-color: #ddfffb;
  padding: 40px 0;
  color: #10a19d;
`;

const Center = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  letter-spacing: 0.9px;

  > h1 {
    font-size: 2rem;
  }

  > iframe {
    margin: 20px 0;
  }
`;

const CardList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
`;

const Card = styled.div`
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 14px;

  > h5 {
    font-size: 1.1rem;
  }

  > p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;
const Icons = styled.span`
  font-size: 1.4rem;
  border-radius: 50%;
  background-color: #ddfffb;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
