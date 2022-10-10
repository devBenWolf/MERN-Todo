
import styled from "styled-components"
import Layout from "../Layout/Layout"
import img from "../images/landing.svg"

const Landing = () => {
    return ( 
        <Wrapper>
            <Layout />
            <img src={img} />
        </Wrapper>
     );
}
 
export default Landing;

export const Wrapper = styled.div`


    img {
        
    }
`