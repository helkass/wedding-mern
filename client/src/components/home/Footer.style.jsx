import styled from "styled-components";
import {Container} from "../Container";
import {AiOutlineWhatsApp} from "react-icons/ai"

export const Footer = () => {
    return (
            <>
            <Contents id="footer" bg={"#CBEDD5"} pd={"40px 0"}>
                <Container>
                    <Content>
                        <span>Are you ready to make digital invitations for your event?</span>
                        <Button fs={"1.6rem"} bg={"#46C2CB"}>create digital invitations now</Button>
                    </Content>
                </Container>
            </Contents>
            <Contents bg={"#10A19D"} pd={"20px 0"}>
                <Container>
                    <Flex>
                        <span>&copy;2022 Get Merried. All Rights Reserved.</span>
                        <Button fs={"1.4rem"} bg={"#285430"}><AiOutlineWhatsApp/>Chat WA</Button>
                    </Flex>
                </Container>
            </Contents>
        </>
    )
}

const Contents = styled.div`
    background-color: ${props => props.bg};
    width: 100%;
    padding: ${props => props.pd};
    display: flex;
    color: white;
`
const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: auto;
    align-items: center;
    line-height: 3;

    > span {
        max-width: max-content;
        font-size: 1.1rem;
        color: #10a19d;
        font-size: 2rem;
    }

    @media (max-width: 548px){
        line-height: 1;
        gap: 2px;
        width: 80%;
        > span {
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 5px;
        }

    }
`
const Button = styled.button`
    text-transform: capitalize;
    border: none;
    border-radius: 6px;
    align-items: center;
    gap: 7px;
    outline: none;
    width: max-content;
    background-color: ${props => props.bg};
    padding: 7px 15px;
    font-size: ${props => props.fs};
    display: flex;
    justify-content: space-between;

    @media (max-width: 548px){
        font-size: 1rem;
    }
`
const Flex = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media (max-width: 548px){
        width: calc(100% - 20px);
        margin: auto;

        span {
            font-size: 0.8rem;
        }

        Button {
            font-size: 0.9rem;
        }
    }
`