import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import styled from "styled-components"


const TodoBottom = (props) => {
    const {themeBoolean} = useContext(ThemeContext)

    return(
    <Wrapper themeBoolean = {themeBoolean} todoLength={props.todoLength}>
        <p><span>{props.todoLength}</span> {props.todoLength > 1 ? "items left" : "item left"}</p>
        <p className="clear-completed-btn" onClick = {props.handleDeleteAll}>Clear Completed</p>
    </Wrapper>
    )
}

export default TodoBottom

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: ${props => props.todoLength === 0 ? "3px" : "0 0 3px 3px"};
    padding: 0.5rem;
    background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
    font-size: 1.4rem;
    box-shadow: ${props => props.themeBoolean ? "none" : "2px 2px 10px"};
    
    @media(max-width: 730px) {
        font-size: 1.1rem;
    }

    p {
        margin: 0 0.5rem;
    }

    span {
        color: hsl(282, 89%, 62%);
        font-weight: bold;
    }

    .clear-completed-btn {
        cursor: pointer;
    }

    .clear-completed-btn:hover {
        color: #00d4ff;
    }
`