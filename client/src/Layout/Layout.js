import { useContext } from 'react';
import styled from 'styled-components';
import darkImageMobile from "../images/bg-mobile-dark.jpg"
import lightImageMobile from "../images/bg-mobile-light.jpg"
import darkImageDesktop from "../images/bg-desktop-dark.jpg"
import lightImageDesktop from "../images/bg-desktop-light.jpg"
import sunIcon from "../images/icon-sun.svg"
import moonIcon from "../images/icon-moon.svg"
import { ThemeContext } from '../context/themeContext';

const Layout = ({children}) => {

    const {themeBoolean, setThemeBoolean, size} = useContext(ThemeContext)

    let currentImage = 0

    if (size < 500 && themeBoolean === true) {
      currentImage = darkImageMobile
    } else if (size < 378 && themeBoolean === true) {
      currentImage = lightImageMobile
    } else if  (size > 378 && themeBoolean === true) {
      currentImage = darkImageDesktop
    } else {
      currentImage = lightImageDesktop
    }

    // change Theme
  
    const changeTheme = () => {
      setThemeBoolean(prevState => !prevState)
    }
 
    
  return (
    <>
    <Wrapper>
    <h4 style={{position: "absolute"}}>{size}</h4>
    <div className = "header-icon-div"><h2>TODO</h2> 
      <img className = "theme-icon" onClick={changeTheme} src={themeBoolean ? sunIcon : moonIcon} 
      alt={themeBoolean ? "sun icon" : "moon icon"} />
    </div>
    <img className = "background-image" src={currentImage} alt={themeBoolean ? "corridor of stone" : 'rocky mountains'} />
    </Wrapper>
    {children}
    </>
  )
}

export default Layout

export const Wrapper = styled.header`


  @media(min-width: 800px) {
    width: 50%;
  }

  .background-image {
    @media(min-width: 800px) {
    width: fit-content;
    height: 12rem;
    }
  }

`