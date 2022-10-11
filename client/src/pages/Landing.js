
import styled from "styled-components"
import img from "../images/landing.svg"

const Landing = () => {
    return ( 
        <Wrapper>
            <div className = "info">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla non nisl eu neque tempus vehicula. Etiam sit amet neque dolor. 
                Nam at dolor iaculis, fringilla elit dapibus, hendrerit ex. 
                Sed vulputate lacus vel eleifend feugiat. Sed varius ipsum id auctor ornare. 
                Nullam fringilla justo sem, nec aliquet ipsum tempor nec.</h3>
                <img src={img} width={500} />
            </div>
        </Wrapper>
     );
}
 
export default Landing;

export const Wrapper = styled.div`
    display: flex;
    border: solid red;
    justify-content: center;
    height: 100vh;

    img {
        
    }

    .info {
        display: flex;
        border: solid blue;
        height: 200px;
    }
`