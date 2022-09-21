import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: ${props => props.todoLength === 0 ? "3px" : "0 0 3px 3px"};
    padding: 0.5rem;
    background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
    font-size: 12px;
    box-shadow: ${props => props.themeBoolean ? "none" : "2px 2px 10px"};
    

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
        color: red;
        transform: scale(1.2);
    
    }
`