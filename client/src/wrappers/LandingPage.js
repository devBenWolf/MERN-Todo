import styled from "styled-components"

const Wrapper = styled.main`
display: flex;
flex-direction: column;
color: ${props => props.themeBoolean ? 'hsl(var(--text-dark))' : `hsl(var(--text-light))`};
background-color: ${props => props.themeBoolean ? 'hsl(var(--bg-dark))' : 'hsl(var(--bg-light))'};
justify-content: center;
align-items: center;
height: 100vh;
position: relative;

`

export default Wrapper