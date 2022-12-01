import styled from "styled-components";
import { Container } from "../Container";
import { options } from "../../constants/options.data";

export const Options = () => {
  return (
    <Container>
      <Main>
        <Title>
          <h1>Various Design Options</h1>
          <p>Choose an invitation design that suits your taste</p>
        </Title>
        <Grid>
          {options.map((item) => (
            <Items key={item.id}>
              <p>#{item.title} design</p>
              <img src={item.image} alt="examples" />
              <Buttons>
                <View>Quick View</View>
                <Order>Order Now</Order>
              </Buttons>
            </Items>
          ))}
        </Grid>
      </Main>
    </Container>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  color: #10a19d;
  padding: 40px 0;

  > h1 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.3rem;
    letter-spacing: 0.8px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  color: #10a19d;
  gap: 10px;
  text-transform: capitalize;
`;

const Items = styled.div`
  align-items: center;
  justify-self: center;
  text-align: center;
  > img {
    width: 430px;
    margin: 20px 0;
  }

  > p {
    font-size: 1.3rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 30px 0;
`;

const View = styled.button`
  padding: 0.5em 1em;
  border-radius: 15px;
  width: 40%;
  background-color: inherit;
  border: 1px solid #10a19d;
  font-size: 1rem;
`;

const Order = styled.button`
  padding: 0.5em 1em;
  border-radius: 15px;
  width: 40%;
  font-size: 1rem;
  background-color: #b5f4ed;
`;
