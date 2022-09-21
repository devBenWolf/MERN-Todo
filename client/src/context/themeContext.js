import {useState, createContext, useEffect} from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [themeBoolean, setThemeBoolean] = useState(true)
        // sizing tool
        const [size, setSize] = useState(window.innerWidth)
        const checkSize = () => {
          setSize(window.innerWidth)
        }
    
        useEffect(() => {
            window.addEventListener('resize', checkSize)
            return () => {
              window.removeEventListener('resize', checkSize)
            }
          })

    return (
        <ThemeContext.Provider value={{themeBoolean, setThemeBoolean, size}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
  return (ThemeContext)
}

export default ThemeContextProvider