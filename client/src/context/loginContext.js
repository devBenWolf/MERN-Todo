import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

export const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: "",
    alertType: ""
}

export const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }


    return (
        <LoginContext.Provider value = {{...state, displayAlert}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export default LoginContextProvider