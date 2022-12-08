import {Container} from "../Container.jsx"
import styled from "styled-components";
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai";
import {packets} from "../../constants/packets.data.js"


export const Packet = () => {
  return (
<Container>
	<Main>
		<h1>Choose Packet</h1>
		<p>choose the packet that suits your needs</p>
		<Flex>
    {packets.map((item, i) => (
			<Item key={i}>
				<Header>
					<Grade bg={item.bgColor}>{item.grade}</Grade>
					<span>{item.price_discount}k</span>
					<strong>{item.price_finally}k</strong>
				</Header>
				{/* <List> */}
          {item.data.map((feature,i) => (
					<ListItem key={i}>
            {feature.status === true ? <AiOutlineCheckCircle color="#5F8D4E" size={20}/> : <AiOutlineCloseCircle size={20} color="#F7A4A4"/>}
            <span>{feature.label}</span>
          </ListItem>
          ))}
          <Order>Order</Order>
			</Item>
          ))}
    </Flex>
	</Main>
</Container>
  )
}

const Main = styled.main`
  width: 100%;
  /* overflow-x: auto; */
  align-items: center;
  margin: 20px 0;
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
  margin-top: 20px;
  gap:8px;
  position: relative;
  /* flex: auto; */
  flex-wrap: nowrap;
  position: relative;
  overflow-x: auto;
  width: 100%;
  text-transform: capitalize;

`

const Item = styled.div`
  flex:1;
  width: 300px;
  max-height: max-content;
  margin: 10px;

  @media (max-width: 548px){
    min-width: calc(80% - 20px);
  }
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
  background-color: ${props => props.bg};
  color: white;
  padding: 10px 5px;
  margin-bottom: 5px;
`
const Order = styled.button`
  background-color: #10a19d;
  color: white;
  font-size: 1.1rem;
  margin: 12px auto;
  padding: 5px 10px;
  border-radius: 5px;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
  line-height: 1.7rem;
  font-weight: 500;

  @media (max-width: 54px){
    text-align: left;
    align-items: left;
  }
`

//diamond b-color: #46C2CB
//gold bg-color: #FCF9BE