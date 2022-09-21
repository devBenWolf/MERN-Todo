import styled from "styled-components";

export const TodoMapWrapper = styled.div`
    overflow: scroll;
    box-shadow: ${props => props.themeBoolean ? "none" : "2px 2px 10px"};
`