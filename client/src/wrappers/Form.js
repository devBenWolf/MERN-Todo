import styled from "styled-components";

export const TodoWrapper = styled.form`
    input {
        background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
        color: ${props => props.themeBoolean ? "hsl(var(--text-dark))" : "hsl(var(--text-light))"};
        border: none;
        border-radius: 3px;
        padding: 5px;
        margin-bottom: 1rem;
        width: 100%;
        box-shadow: ${props => props.themeBoolean ? "none" : "2px 2px 10px"};
    }
`