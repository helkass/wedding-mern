import {Container} from "../Container.jsx"
import styled from "styled-components";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {packets} from "../../constants/packets.data.js"


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
				<List>
					<
				</List>
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

const Flex = styled.div`
  display: flex;
  gap:8px;
  width: 100%;
`

const Item = styled.div`
  display:grid;
  flex:1;
`

const Header = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  > span {
    font-size: 1rem;
    color: red;
    text-decoration: line-through;
  }
`
const Grade = styled.div`
  background-color: #FCF9BE;
  color: #10a19d;
  padding: 7px 5px;
  margin-bottom: 5px;
`
//diamond b-color: 46C2CB