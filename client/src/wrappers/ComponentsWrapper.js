import styled from "styled-components"


const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 70vh;
    z-index: 10;
    transform: translateY(5%);

    @media (min-width: 450px) {
        width: 300px;
    }
    @media (min-width: 700px ) {
        width: 350px;
    }
    @media (min-width: 1000px ) {
        width: 400px;
    }
`

export default ComponentWrapper
