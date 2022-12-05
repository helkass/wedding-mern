import styled from "styled-components";
import { Container } from "../Container";
import { AiFillStar } from "react-icons/ai"
import {data} from "../../constants/reviews.data.js"

export const Reviews = () => {
  return (
    <Container>
      <Content>
        <h2>What are they saying</h2>
        <List>
            {data.map((item, i) => (
              <Card key={i}>
                <p>{item.desc}</p>
                <Flex>
                  {[...Array(5)].map((obj, i) => {
                    return <AiFillStar key={i} />;
                  })}
                  {item.name}
                </Flex>
              </Card>
            ))}
        </List>
      </Content>
    </Container>
  );
};

const Content = styled.main`
  color: #10a19d;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  > h2 {
    font-size: 2rem;
  }
`;

const List = styled.div`
  display: flex;
  gap: 5px;
  scroll-snap-type: none;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 90%;
  height: 300px;
`;
const Card = styled.div`
  background-color: #ddfffb;
  height: 160px;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
  font-size: 1.2rem;
  > p {
    max-width: 80%;
    margin: auto;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-weight: 500;
`;
