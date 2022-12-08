import styled from "styled-components";
import { Container } from "../Container";
import { icons, content } from "../../constants/nav.data";

export const Features = ({forwardRef}) => {
  return (
    <Main ref={forwardRef}>
      <Container>
        <Content>
          <h1>Features</h1>
          <p>
            The <span>Get Merried</span> Digital Invitation Website is
            accompanied by various features that can make it easier for you to
            invite the closest people to your special event.
          </p>
          <Grid>
            {content.map((item, i) => {
              const Icon = icons[i];
              return (
                <Card key={i}>
                  <Icons>
                    <Icon />
                  </Icons>
                  <CardItems>
                    <p>{item.title}</p>
                    <span>{item.desc}</span>
                  </CardItems>
                </Card>
              );
            })}
          </Grid>
        </Content>
      </Container>
    </Main>
  );
};

const Main = styled.section`
  background-color: #ddfffb;
`;

const Content = styled.main`
  padding: 50px 20px;
  width: 100%;
  align-items: center;
  text-align: center;
  line-height: 2rem;
  color: #10a19d;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2.2rem;
  }

  > p {
    font-size: 1.3rem;
  }
`;

const Card = styled.div`
  cursor: default;
  border-radius: 10px;
  gap: 8px;
  display: flex;
  padding: 16px;
  background-color: white;
  transition: 0.3s;

  &:hover {
    transform: scale(110%);
    box-shadow: rgba(128, 244, 235, 0.797) 1.95px 1.95px 2.6px;
  }

  @media (max-width: 548px){
    flex-direction: column;
    align-items: center;
  }
`;

const Icons = styled.span`
  border-radius: 50%;
  background-color: #ddfffb;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 50px;
  width: 50px;
  font-size: 1.3rem;
`;

const CardItems = styled.div`
  text-align: left;
  width: 100%;
  line-height: 1.5rem;

  > p {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  > span {
    color: #b2b2b2;
  }

  @media (max-width: 548px){
    text-align: center;
    line-height: 1.2rem;

    > p{
      font-size: 1.2rem;
    }

    >span{
      font-size: 0.9rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;

  @media (max-width: 548px){
    grid-template-columns: auto auto;
    gap: 2;
  }
`;
