import {Container} from "../Container.jsx"
import styled from "styled-components"

export const Packet = () => {
  return (
    <Container>
      <Main>
        <h1>Choose Packet</h1>
        <p>choose the packet that suits your needs</p>
        <Flex>
          <Item>
            <Header>
              <Grade>Gold</Grade>
              <span>Rp.120.000</span>
              <strong>Rp.99.000</strong>
            </Header>
          </Item>
        </Flex>
      </Main>
    </Container>
  )
}

const Main = styled.main`
  width: 100%;
  align-items: center,
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  > h1 {
      font-size: 2rem;
  }
  > p {
    font-size: 1.2rem;
  }
`

const Flex = styed.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap:8px;
  width: 100%;
`

const Item = styled.div`
  display:grid;
`

const Header = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 1rem;
    color: red;
    text-decoration: line-through;
  }
`
const Grade = styled.h5`
  background-color: #b5f4ed;
  color: #10a19d;
  padding: 7px 5px;
  margin-bottom: 5px;
`
