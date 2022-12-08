import styled from "styled-components";
import {Container} from "../Container";
import {IoMdArrowDropright, IoMdArrowDropdown} from "react-icons/io"
import {questions} from "../../constants/questions.data"
import { useState} from "react"


export const Questions = () => {
    const [show, setShow] = useState(false)

    const handleClick = (i) => {
        setShow(!show)
    }

    return (
        <Container>
            <Section>
                <h5>FAQ</h5>
                <span>pertanyaan yang sering ditanyakan</span>
                    {questions.map((item,i) => (
                    <ListItems key={i}>
                        <ListQuestion onClick={() =>handleClick(i)}>
                            {show ? <IoMdArrowDropdown size={20}/> : <IoMdArrowDropright size={20}/>}
                            <p>{item.label}</p>
                        </ListQuestion>
                        {show ? 
                        <ListAnswer>{item.desc}</ListAnswer>
                        : <></>}
                    </ListItems>
                    ))}
            </Section>
        </Container>
    )
}

const Section = styled.section`
    padding: 20px 0;
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 100%;
    text-transform: capitalize;
    font-size: 20px;
    > h5 {
        font-size: 3rem;
    }
`

const List = styled.ul`
    color: #8B7E74;
    max-width: 90%;
    margin: auto;

    @media (max-width: 548px){
        width: 100%;
        background-color: aqua;
    }
`
const ListItems = styled.div`
    width: 90%;
    margin: auto;
    text-align: left;
    font-size: 1rem;
`

const ListQuestion = styled.li`
    border-bottom: 1px solid #8B7E74;
    padding: 0 2px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const ListAnswer = styled.p`
    animation: all 2s ease-out;
    animation-duration: 700ms;
    opacity: 90;
    font-size: 18px;
    padding: 0 10px;
`